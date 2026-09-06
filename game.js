const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d", { alpha: false });
const minimapCanvas = document.querySelector("#minimapCanvas");
const minimapCtx = minimapCanvas.getContext("2d");
const portraitCanvas = document.querySelector("#portraitCanvas");
const portraitCtx = portraitCanvas.getContext("2d");
const loadingScreen = document.querySelector("#loadingScreen");
const loadingArt = document.querySelector(".loading-art");
const loadingBar = document.querySelector("#loadingBar");
const startScreen = document.querySelector("#startScreen");
const nameInput = document.querySelector("#nameInput");
const spawnButton = document.querySelector("#spawnButton");
const accountButton = document.querySelector("#accountButton");
const monsterDexButton = document.querySelector("#monsterDexButton");
const petalDexButton = document.querySelector("#petalDexButton");
const accountPanel = document.querySelector("#accountPanel");
const loginForm = document.querySelector("#loginForm");
const loginNameInput = document.querySelector("#loginName");
const loginPasswordInput = document.querySelector("#loginPassword");
const registerForm = document.querySelector("#registerForm");
const registerNameInput = document.querySelector("#registerName");
const registerPasswordInput = document.querySelector("#registerPassword");
const registerPasswordConfirmInput = document.querySelector("#registerPasswordConfirm");
const wechatRegisterButton = document.querySelector("#wechatRegisterButton");
const appleRegisterButton = document.querySelector("#appleRegisterButton");
const accountMessage = document.querySelector("#accountMessage");
const monsterDexPanel = document.querySelector("#monsterDexPanel");
const monsterDexList = document.querySelector("#monsterDexList");
const monsterDexCloseButton = document.querySelector("#monsterDexCloseButton");
const petalDexPanel = document.querySelector("#petalDexPanel");
const petalDexList = document.querySelector("#petalDexList");
const petalDexCloseButton = document.querySelector("#petalDexCloseButton");
const modeButtons = Array.from(document.querySelectorAll(".mode-button"));
const antHellNotice = document.querySelector("#antHellNotice");
const deathScreen = document.querySelector("#deathScreen");
const respawnButton = document.querySelector("#respawnButton");
const playerName = document.querySelector("#playerName");
const playerHealthFill = document.querySelector("#playerHealthFill");
const playerExperienceFill = document.querySelector("#playerExperienceFill");
const playerExperienceCurrent = document.querySelector("#playerExperienceCurrent");
const playerExperienceNeeded = document.querySelector("#playerExperienceNeeded");
const playerLevel = document.querySelector("#playerLevel");
const primaryHotbar = document.querySelector("#primaryHotbar");
const secondaryHotbar = document.querySelector("#secondaryHotbar");
const equipmentSlots = Array.from(document.querySelectorAll("#primaryHotbar .slot"));
const secondaryEquipmentSlots = Array.from(document.querySelectorAll("#secondaryHotbar .slot"));
const inventoryPanel = document.querySelector("#inventoryPanel");
const inventoryGrid = document.querySelector("#inventoryGrid");
const inventoryToggleButton = document.querySelector("#inventoryToggleButton");
const settingsButton = document.querySelector("#settingsButton");
const settingsPanel = document.querySelector("#settingsPanel");
const settingsOptions = Array.from(document.querySelectorAll(".settings-option"));
const musicToggle = document.querySelector("#musicToggle");
const qualitySelect = document.querySelector("#qualitySelect");
const hitboxToggle = document.querySelector("#hitboxToggle");
const reverseAttackToggle = document.querySelector("#reverseAttackToggle");
const playerHealthToggle = document.querySelector("#playerHealthToggle");
const otherPetalsToggle = document.querySelector("#otherPetalsToggle");
const damageNumbersToggle = document.querySelector("#damageNumbersToggle");
const talentButton = document.querySelector("#talentButton");
const talentPanel = document.querySelector("#talentPanel");
const talentGrid = document.querySelector("#talentGrid");
const talentPointsLabel = document.querySelector("#talentPointsLabel");
const talentStatsLabel = document.querySelector("#talentStatsLabel");
const craftButton = document.querySelector("#craftButton");
const craftPanel = document.querySelector("#craftPanel");
const craftList = document.querySelector("#craftList");
const craftSlotsContainer = document.querySelector("#craftSlots");
const craftSlots = Array.from(document.querySelectorAll("#craftSlots .craft-slot"));
const craftSubmitButton = document.querySelector("#craftSubmitButton");
const craftCloseButton = document.querySelector("#craftCloseButton");
const craftChanceLabel = document.querySelector("#craftChanceLabel");
const craftMessage = document.querySelector("#craftMessage");
const forgeButton = document.querySelector("#forgeButton");
const forgePanel = document.querySelector("#forgePanel");
const forgeList = document.querySelector("#forgeList");
const forgeSlotsContainer = document.querySelector("#forgeSlots");
const forgeSlots = Array.from(document.querySelectorAll("#forgeSlots .craft-slot"));
const forgeSubmitButton = document.querySelector("#forgeSubmitButton");
const forgeCloseButton = document.querySelector("#forgeCloseButton");
const forgeChanceLabel = document.querySelector("#forgeChanceLabel");
const forgeMessage = document.querySelector("#forgeMessage");
const leaderboardPanel = document.querySelector("#leaderboardPanel");
const leaderboardList = document.querySelector("#leaderboardList");
const authorPanel = document.querySelector("#authorPanel");
const authorCard = document.querySelector(".author-card");
const authorCloseButton = document.querySelector("#authorCloseButton");
const authorGate = document.querySelector("#authorGate");
const authorNameInput = document.querySelector("#authorNameInput");
const authorBirthdayInput = document.querySelector("#authorBirthdayInput");
const authorVerifyButton = document.querySelector("#authorVerifyButton");
const authorMessage = document.querySelector("#authorMessage");
const authorTeleportArea = document.querySelector("#authorTeleportArea");
const authorMapPreview = document.querySelector("#authorMapPreview");
const authorMapCanvas = document.querySelector("#authorMapCanvas");
const authorMapCtx = authorMapCanvas.getContext("2d");
const authorMapMarker = document.querySelector("#authorMapMarker");
const authorTeleportButton = document.querySelector("#authorTeleportButton");
const authorItemNameSelect = document.querySelector("#authorItemNameSelect");
const authorItemTierSelect = document.querySelector("#authorItemTierSelect");
const authorItemQuantityInput = document.querySelector("#authorItemQuantityInput");
const authorAddItemButton = document.querySelector("#authorAddItemButton");
const authorLevelInput = document.querySelector("#authorLevelInput");
const authorSetLevelButton = document.querySelector("#authorSetLevelButton");
const authorSpawnMapSelect = document.querySelector("#authorSpawnMapSelect");
const authorMonsterSpeciesSelect = document.querySelector("#authorMonsterSpeciesSelect");
const authorMonsterTierSelect = document.querySelector("#authorMonsterTierSelect");
const authorMonsterQuantityInput = document.querySelector("#authorMonsterQuantityInput");
const authorSpawnMonsterButton = document.querySelector("#authorSpawnMonsterButton");
const tabletControls = document.querySelector("#tabletControls");
const joystick = document.querySelector("#joystick");
const joystickKnob = document.querySelector("#joystickKnob");
const touchAttackButton = document.querySelector("#touchAttackButton");
const touchDefendButton = document.querySelector("#touchDefendButton");
const translatedElements = Array.from(document.querySelectorAll("[data-i18n]"));
const itemTooltip = document.createElement("div");
itemTooltip.className = "item-tooltip is-hidden";
document.body.append(itemTooltip);

function createRockDataUrl() {
  const cx = 250;
  const cy = 250;
  const baseRadius = 130;
  const sides = 9;
  const points = [];

  for (let index = 0; index < sides; index++) {
    const angle = (Math.PI * 2 * index) / sides - Math.PI / 2;
    const wobble = Math.sin(index * 2.31 + 0.7) * 18 + Math.sin(index * 5.17) * 8;
    const radius = baseRadius + wobble;
    points.push(`${cx + Math.cos(angle) * radius},${cy + Math.sin(angle) * radius}`);
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><polygon points="${points.join(
    " ",
  )}" fill="#787878" stroke="#545454" stroke-width="26" stroke-linejoin="round"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function createLentilDataUrl() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><circle cx="250" cy="250" r="142" fill="#171717" stroke="#050505" stroke-width="34"/><circle cx="205" cy="190" r="34" fill="#4a4a4a" opacity=".72"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const ASSETS = {
  player: "flower-face.webp",
  basic: "basic-clean.webp",
  stinger: "Stinger.webp",
  pollen: "pollen.webp",
  rose: "rose.webp",
  light: "light1.webp",
  thunderHammer: "雷神之锤.webp",
  bee: "bee.webp",
  ladybug: "ladybug.webp",
  rock: createRockDataUrl(),
  lentil: createLentilDataUrl(),
};

const TIERS = [
  { name: "Common", color: "#30c75a" },
  { name: "Unusual", color: "#f1d247" },
  { name: "Rare", color: "#2f5fbf" },
  { name: "Epic", color: "#7835b8" },
  { name: "Legendary", color: "#ff3030" },
  { name: "Mythic", color: "#28f0ff" },
  { name: "Ultra", color: "#ff16b7" },
  { name: "Super", color: "#25ffad" },
  { name: "Unique", color: "#4b4f58" },
  { name: "Eternal", color: "#ffffff" },
  { name: "Senior", color: "#c77b30" },
  { name: "Advanced", color: "#19a884" },
  { name: "King", color: "#f7b733" },
  { name: "Unparalleled", color: "#bf3fff" },
  { name: "Peak", color: "#4fd6ff" },
  { name: "Ethereal", color: "#d4b5ff" },
  { name: "Transcendent", color: "#8f6bff" },
  { name: "Peerless", color: "#ffd1a8" },
].map((tier, index) => ({ ...tier, index }));

const TEXT = {
  zh: {
    spawn: "出生",
    garden: "花园",
    antHell: "蚁穴",
    antHellUnavailable: "Ant Hell is not finished yet.\n蚂蚁地狱还没做完，敬请期待。",
    namePrompt: "这朵小花叫做...",
    login: "登录",
    register: "注册",
    accountName: "名字",
    password: "密码",
    confirmPassword: "再次确认密码",
    confirm: "确定",
    wechatRegister: "微信注册",
    appleRegister: "Apple注册",
    accountLoginRequired: "请先登录或注册，本地记录会保存你的进度。",
    accountLoginSuccess: "登录成功",
    accountRegisterSuccess: "注册成功",
    accountMissingFields: "名字和密码都要填",
    accountPasswordMismatch: "两次密码不一样",
    accountExists: "这个名字和密码已经注册过了",
    accountNotFound: "没有找到这个账号，请先注册",
    accountWrongPassword: "密码不对",
    monsterDex: "怪物图鉴",
    petalDex: "花瓣图鉴",
    monsterBee: "蜜蜂",
    monsterLadybug: "瓢虫",
    monsterRock: "石头",
    monsterHealth: "生命",
    monsterDamage: "体伤",
    monsterExperience: "经验",
    monsterSize: "体型",
    monsterAmount: "数量",
    monsterDrops: "掉落",
    monsterNoDrops: "暂无掉落",
    monsterDropTier: "掉落等级",
    settings: "设置",
    movementMode: "移动方式",
    mouse: "鼠标",
    tablet: "平板",
    layoutMode: "界面模式",
    auto: "自动",
    desktop: "电脑",
    language: "语言",
    music: "音乐",
    quality: "质量",
    qualityLow: "低",
    qualityMedium: "中",
    qualityHigh: "高",
    hitboxEdges: "碰撞箱边缘",
    reverseAttack: "攻击反向",
    cameraMode: "视角",
    cameraLocked: "锁定",
    cameraFree: "自由",
    playerHealthBar: "玩家血条显示",
    otherPetals: "他人花瓣显示",
    damageNumbers: "伤害数值显示",
    talents: "天赋",
    talentPoints: "天赋点",
    talentMaxHealth: "最大生命值",
    talentVision: "视野",
    talentPetalRefresh: "减少花瓣刷新时间",
    talentMagnet: "自身磁铁",
    talentRegen: "回血速度",
    talentBodyDamage: "体伤",
    talentPetalSpeed: "花瓣转速",
    talentPetalDurability: "花瓣耐久",
    talentEquipmentSlots: "玩家装备栏",
    talentMoveSpeed: "移动速度",
    talentExtraDrop: "额外掉落",
    talentExperience: "经验获取",
    talentDamageReduction: "受到伤害减少",
    talentCraftChance: "合成成功率",
    talentAttackRange: "攻击距离",
    talentMaxHealthStat: "最高生命",
    talentBodyDamageStat: "体伤",
    craft: "合成",
    craftAvailable: "可合成花瓣",
    craftSlots: "合成槽",
    craftChance: "本次成功率",
    craftTip: "消耗5个相同的花瓣来进行一次合成",
    craftEmpty: "没有够 5 个的同级同种花瓣",
    craftLoaded: "已装填",
    craftResult: "成功",
    craftFailed: "失败",
    craftReturned: "返还",
    forge: "锻造",
    forgeAvailable: "可锻造材料",
    forgeSlots: "锻造槽",
    forgeChance: "必定成功",
    forgeTip: "消耗5个15级以上同级Stinger换同级雷神之锤",
    forgeEmpty: "没有够5个的15级以上Stinger",
    forgeResult: "获得",
    leaderboard: "排行榜",
    leaderboardEmpty: "暂无玩家",
    authorPanel: "作者面板",
    authorName: "名字",
    authorBirthday: "生日",
    authorTeleport: "传送",
    authorWrong: "名字或生日不对",
    authorPickPoint: "点一下地图位置，再传送",
    authorMapPickHint: "点击地图选择传送或生成位置",
    authorSpawnPickPoint: "先在地图上点击一个生成位置",
    authorReady: "已通过，选择传送位置",
    petalType: "花瓣",
    petalName: "名称",
    petalTier: "等级",
    petalDamage: "伤害",
    petalDurability: "耐久",
    petalCooldown: "刷新",
    petalHeal: "回血",
    petalHomingRange: "追击距离",
    petalDurabilityCost: "命中消耗",
    petalStatus: "状态",
    petalReady: "可用",
    petalRecharging: "刷新中",
    petalPlaced: "已放置",
    petalBasic: "基础",
    petalStinger: "刺针",
    petalPollen: "花粉",
    petalRose: "玫瑰",
    petalLight: "Light",
    petalStone: "石头",
    petalLentil: "小扁豆",
    petalThunderHammer: "雷神之锤",
    on: "开",
    off: "关",
    inventory: "背包",
    youDied: "你死了",
    respawn: "重生",
    attack: "攻击",
    defend: "防御",
    defaultPlayerName: "玩家",
  },
  en: {
    spawn: "Spawn",
    garden: "Garden",
    antHell: "Ant Hell",
    antHellUnavailable: "Ant Hell is not finished yet.\n蚂蚁地狱还没做完，敬请期待。",
    namePrompt: "This pretty little flower is called...",
    login: "Login",
    register: "Register",
    accountName: "Name",
    password: "Password",
    confirmPassword: "Confirm Password",
    confirm: "Confirm",
    wechatRegister: "WeChat",
    appleRegister: "Apple",
    accountLoginRequired: "Please login or register first. Local records will save your progress.",
    accountLoginSuccess: "Logged in",
    accountRegisterSuccess: "Registered",
    accountMissingFields: "Name and password are required",
    accountPasswordMismatch: "Passwords do not match",
    accountExists: "That name and password are already registered",
    accountNotFound: "Account not found. Register first",
    accountWrongPassword: "Wrong password",
    monsterDex: "Monster Dex",
    petalDex: "Petal Dex",
    monsterBee: "Bee",
    monsterLadybug: "Ladybug",
    monsterRock: "Rock",
    monsterHealth: "Health",
    monsterDamage: "Body Damage",
    monsterExperience: "XP",
    monsterSize: "Size",
    monsterAmount: "Amount",
    monsterDrops: "Drops",
    monsterNoDrops: "No drops yet",
    monsterDropTier: "Drop Tier",
    settings: "Settings",
    movementMode: "Movement",
    mouse: "Mouse",
    tablet: "Tablet",
    layoutMode: "Layout",
    auto: "Auto",
    desktop: "Desktop",
    language: "Language",
    music: "Music",
    quality: "Quality",
    qualityLow: "Low",
    qualityMedium: "Medium",
    qualityHigh: "High",
    hitboxEdges: "Hitbox Edges",
    reverseAttack: "Reverse Attack",
    cameraMode: "Camera",
    cameraLocked: "Locked",
    cameraFree: "Free",
    playerHealthBar: "Player Health Bar",
    otherPetals: "Other Petals",
    damageNumbers: "Damage Numbers",
    talents: "Talents",
    talentPoints: "Talent Points",
    talentMaxHealth: "Max Health",
    talentVision: "Vision",
    talentPetalRefresh: "Petal Refresh",
    talentMagnet: "Magnet",
    talentRegen: "Health Regen",
    talentBodyDamage: "Body Damage",
    talentPetalSpeed: "Petal Speed",
    talentPetalDurability: "Petal Durability",
    talentEquipmentSlots: "Equipment Slots",
    talentMoveSpeed: "Move Speed",
    talentExtraDrop: "Extra Drop",
    talentExperience: "Experience",
    talentDamageReduction: "Damage Reduction",
    talentCraftChance: "Craft Chance",
    talentAttackRange: "Attack Range",
    talentMaxHealthStat: "Max Health",
    talentBodyDamageStat: "Body Damage",
    craft: "Craft",
    craftAvailable: "Craftable Petals",
    craftSlots: "Craft Slots",
    craftChance: "This Chance",
    craftTip: "Spend 5 matching petals for one craft",
    craftEmpty: "No same-tier petal stack has 5 yet",
    craftLoaded: "Loaded",
    craftResult: "Success",
    craftFailed: "Failed",
    craftReturned: "Returned",
    forge: "Forge",
    forgeAvailable: "Forge Materials",
    forgeSlots: "Forge Slots",
    forgeChance: "Guaranteed",
    forgeTip: "Spend 5 same-tier Lv.15+ Stingers for a same-tier Thunder Hammer",
    forgeEmpty: "No Lv.15+ Stinger stack has 5 yet",
    forgeResult: "Received",
    leaderboard: "Leaderboard",
    leaderboardEmpty: "No players yet",
    authorPanel: "Author Panel",
    authorName: "Name",
    authorBirthday: "Birthday",
    authorTeleport: "Teleport",
    authorWrong: "Wrong name or birthday",
    authorPickPoint: "Pick a map point, then teleport",
    authorMapPickHint: "Click the map to choose a teleport or spawn point",
    authorSpawnPickPoint: "Pick a spawn point on the map first",
    authorReady: "Unlocked. Pick a teleport point",
    petalType: "Petal",
    petalName: "Name",
    petalTier: "Tier",
    petalDamage: "Damage",
    petalDurability: "Durability",
    petalCooldown: "Respawn",
    petalHeal: "Heal",
    petalHomingRange: "Homing Range",
    petalDurabilityCost: "Hit Cost",
    petalStatus: "Status",
    petalReady: "Ready",
    petalRecharging: "Recharging",
    petalPlaced: "Placed",
    petalBasic: "Basic",
    petalStinger: "Stinger",
    petalPollen: "Pollen",
    petalRose: "Rose",
    petalLight: "Light",
    petalStone: "Stone",
    petalLentil: "Lentil",
    petalThunderHammer: "Thunder Hammer",
    on: "On",
    off: "Off",
    inventory: "Inventory",
    youDied: "You Died",
    respawn: "Respawn",
    attack: "Attack",
    defend: "Defend",
    defaultPlayerName: "Player",
  },
};

const BEE_STATS = {
  maxHealth: 80,
  attack: 80,
  experienceReward: 10,
  bodyDamageCooldown: 200,
  radius: 32,
  width: 48,
  height: 98,
  hitRadiusX: 20,
  hitRadiusY: 31,
};
const LADYBUG_STATS = {
  maxHealth: 110,
  attack: 30,
  experienceReward: 10,
  bodyDamageCooldown: 200,
  radius: 36,
  width: 102,
  height: 102,
  hitShape: "circle",
  hitRadius: 31,
  hitRadiusX: 31,
  hitRadiusY: 31,
};
const ROCK_STATS = {
  maxHealth: 115,
  attack: 10,
  experienceReward: 10,
  bodyDamageCooldown: 200,
  radius: 43,
  width: 104,
  height: 104,
  hitShape: "circle",
  hitRadius: 43,
  hitRadiusX: 43,
  hitRadiusY: 43,
  stationary: true,
};
const MONSTER_DEFINITIONS = {
  Bee: {
    labelKey: "monsterBee",
    asset: "bee",
    stats: BEE_STATS,
    drops: ["Stinger", "Pollen"],
  },
  Ladybug: {
    labelKey: "monsterLadybug",
    asset: "ladybug",
    stats: LADYBUG_STATS,
    drops: ["Rose", "Light"],
  },
  Rock: {
    labelKey: "monsterRock",
    asset: "rock",
    stats: ROCK_STATS,
    drops: ["Stone", "Lentil"],
  },
};
const MONSTER_SPECIES = Object.keys(MONSTER_DEFINITIONS);
const LADYBUG_CHASE_TIER_INDEX = getTierIndexByName("Epic");
const LADYBUG_CHASE_DURATION_MS = 6500;
const LADYBUG_CHASE_RADIUS = 1400;
const LADYBUG_HEAD_FORWARD_OFFSET = 0.9;

const HIT_FLASH_SECONDS = 0.28;
const DEATH_ANIMATION_MS = 95;
const DEATH_END_SCALE = 0.8;
const MAP_MONSTER_TIER_CONFIGS = {
  garden: {
    minTierName: "Common",
    maxTierName: "Eternal",
    targetCounts: [155, 155, 153, 150, 148, 145, 143, 140, 138, 175],
  },
  garden2: {
    minTierName: "Eternal",
    maxTierName: "Peerless",
    targetCounts: [160, 160, 160, 160, 160, 160, 160, 160, 220],
  },
};
const MONSTER_RESPAWN_MS = 650;
const MONSTER_REGEN_DELAY_MS = 10000;
const MONSTER_REGEN_PER_SECOND = 0.005;
const MONSTER_ATTACK_TIER_MULTIPLIER = 4.1;
const MONSTER_EXPERIENCE_TIER_MULTIPLIER = 3.3;
const RESPAWN_INVULNERABLE_MS = 1200;
const MONSTER_SPAWN_SAFE_RADIUS = 700;
const MAP_WIDTH = 38400;
const MAP_HEIGHT = 38400;
const MAP_HALF_WIDTH = MAP_WIDTH / 2;
const MAP_HALF_HEIGHT = MAP_HEIGHT / 2;
const MINIMAP_WIDTH = 170;
const MINIMAP_HEIGHT = 170;
const PORTRAIT_SIZE = 74;
const BASE_EQUIPMENT_SLOTS = 5;
const MAX_EQUIPMENT_SLOTS = 10;
const MAX_TALENT_POINTS = 600;
const CRAFT_ITEMS_PER_ATTEMPT = 5;
const FORGE_ITEMS_PER_ATTEMPT = 5;
const THUNDER_HAMMER_MIN_TIER_NUMBER = 15;
const THUNDER_HAMMER_LEADERBOARD_TIER_NUMBER = 16;
const THUNDER_HAMMER_REFERENCE_TIER_NUMBER = 16;
const THUNDER_HAMMER_REFERENCE_ATTACK = 656000000;
const THUNDER_HAMMER_REFERENCE_DURABILITY = 328000000;
const LEADERBOARD_MIN_LEVEL = 21;
const CRAFT_CHANCES = [
  0.7,
  0.64,
  0.57,
  0.5,
  0.44,
  0.22,
  0.15,
  0.08,
  0.06,
  0.04,
  0.03,
  0.02,
  0.015,
  0.012,
  0.01,
  0.004,
  0.002,
  0.001,
];
const CRAFT_COLLIDE_ANIMATION_MS = 820;
const CRAFT_RESULT_EFFECT_MS = 720;
const ACCOUNT_STORAGE_KEY = "flora-local-accounts-v1";
const ACCOUNT_BACKUP_STORAGE_KEY = "flora-local-account-backups-v1";
const ACCOUNT_LAST_LOCAL_KEY = "flora-local-last-account-v1";
const PETAL_BASE_RESPAWN_MS = 450;
const MONSTER_ROAM_RADIUS = 165;
const BASE_PLAYER_MAX_HEALTH = 100;
const DROP_SIZE = 62;
const DROP_STACK_MERGE_RADIUS = 58;
const PETAL_MONSTER_PUSH_STRENGTH = 0.72;
const PETAL_DURABILITY_TIER_MULTIPLIER = 2;
const PETAL_BASE_DURABILITY = 10;
const PETAL_BASE_ATTACK = 10;
const LENTIL_BASE_HOMING_RANGE = 260;
const PETAL_DEFINITIONS = {
  Basic: {
    labelKey: "petalBasic",
    asset: "basic",
    baseAttack: PETAL_BASE_ATTACK,
    baseDurability: PETAL_BASE_DURABILITY,
    baseRespawnMs: PETAL_BASE_RESPAWN_MS,
    durabilityCost: 10,
  },
  Stinger: {
    labelKey: "petalStinger",
    asset: "stinger",
    baseAttack: 30,
    baseDurability: 2,
    baseRespawnMs: 900,
    durabilityCost: 1,
    fixedDurability: true,
  },
  Pollen: {
    labelKey: "petalPollen",
    asset: "pollen",
    baseAttack: 20,
    baseDurability: 80,
    baseRespawnMs: 420,
    durabilityCost: 1,
    placeableBarrier: true,
  },
  Rose: {
    labelKey: "petalRose",
    asset: "rose",
    baseAttack: 10,
    baseDurability: 15,
    baseRespawnMs: 1000,
    durabilityCost: 5,
    baseHeal: 35,
    autoHeal: true,
  },
  Light: {
    labelKey: "petalLight",
    asset: "light",
    baseAttack: 10,
    baseDurability: 5,
    baseRespawnMs: 300,
    durabilityCost: 3,
    multiOrb: true,
  },
  Stone: {
    labelKey: "petalStone",
    asset: "rock",
    baseAttack: 10,
    baseDurability: 25,
    baseRespawnMs: 1200,
    durabilityCost: 8,
  },
  Lentil: {
    labelKey: "petalLentil",
    asset: "lentil",
    baseAttack: 10,
    baseDurability: 15,
    baseRespawnMs: 900,
    durabilityCost: 5,
    homingRange: LENTIL_BASE_HOMING_RANGE,
  },
  ThunderHammer: {
    labelKey: "petalThunderHammer",
    asset: "thunderHammer",
    baseAttack: THUNDER_HAMMER_REFERENCE_ATTACK,
    baseDurability: THUNDER_HAMMER_REFERENCE_DURABILITY,
    baseRespawnMs: 2000,
    durabilityCost: 1,
    minTierNumber: THUNDER_HAMMER_MIN_TIER_NUMBER,
    referenceTierNumber: THUNDER_HAMMER_REFERENCE_TIER_NUMBER,
    attackTierMultiplier: 3,
    durabilityTierMultiplier: 2,
  },
};
const POLLEN_BARRIER_RADIUS = 28;
const POLLEN_BARRIER_LIFETIME_MS = 10000;
const POLLEN_BARRIER_DAMAGE_COOLDOWN_MS = 300;
const POLLEN_BARRIER_MONSTER_PUSH = 0.2;
const POLLEN_BARRIER_SELF_PUSH = 0.85;
const GARDEN_BASE_GREEN = "#62ba70";
const GARDEN_DARK_TRI = "#58ad66";
const GARDEN_LIGHT_TRI = "#6ec878";
const GARDEN_GLOBAL_MIN_DIST = 58;
const GARDEN_DARK_TRI_CELL = 210;
const GARDEN_LIGHT_TRI_CELL = 185;
const GARDEN_DOT_CELL = 126;
const GARDEN_JITTER_SCALE = 0.65;
const GARDEN_TEXTURE_LAYERS = [
  { type: "darkTri", cell: GARDEN_DARK_TRI_CELL, jitter: GARDEN_JITTER_SCALE, seed: 1, order: 0 },
  { type: "lightTri", cell: GARDEN_LIGHT_TRI_CELL, jitter: GARDEN_JITTER_SCALE, seed: 5, order: 1 },
  { type: "dot", cell: GARDEN_DOT_CELL, jitter: GARDEN_JITTER_SCALE, seed: 9, order: 2 },
];
const GARDEN2_CIRCLE_GLOBAL_MIN_DIST = 48;
const GARDEN2_CIRCLE_TEXTURE_LAYERS = [
  { type: "darkCircle", color: "#52ad5f", cell: 178, jitter: 0.72, seed: 41, order: 0, minRadius: 8, maxRadius: 22 },
  { type: "lightCircle", color: "#78d284", cell: 148, jitter: 0.72, seed: 47, order: 1, minRadius: 7, maxRadius: 20 },
];
const MAP_ART_SIZE = 2048;
const MAP_TILE_COLUMNS = 64;
const MAP_TILE_ROWS = 64;
const MAP_ROUTE_HALF_WIDTH = 10.2;
const MAP_ROUTE_POINTS = [
  { x: 9, y: 13 },
  { x: 18, y: 11.7 },
  { x: 31, y: 14.3 },
  { x: 44, y: 12.4 },
  { x: 55, y: 13.4 },
  { x: 56.6, y: 24 },
  { x: 54.2, y: 36 },
  { x: 55, y: 47 },
  { x: 42, y: 48.3 },
  { x: 29, y: 45.9 },
  { x: 18, y: 48.4 },
  { x: 11, y: 47 },
];
const MAP_SMALL_WALLS = [
  { progress: 0.08, offset: 4.8, progressRadius: 0.012, offsetRadius: 0.9, seed: 1.2 },
  { progress: 0.14, offset: -4.6, progressRadius: 0.015, offsetRadius: 1.1, seed: 2.8 },
  { progress: 0.18, offset: 2.1, progressRadius: 0.01, offsetRadius: 0.7, seed: 3.5 },
  { progress: 0.22, offset: 5.2, progressRadius: 0.013, offsetRadius: 1.0, seed: 4.4 },
  { progress: 0.27, offset: -2.3, progressRadius: 0.011, offsetRadius: 0.72, seed: 5.2 },
  { progress: 0.31, offset: -5.1, progressRadius: 0.014, offsetRadius: 0.9, seed: 6.1 },
  { progress: 0.39, offset: 4.2, progressRadius: 0.012, offsetRadius: 1.2, seed: 7.7 },
  { progress: 0.43, offset: -1.9, progressRadius: 0.01, offsetRadius: 0.68, seed: 8.5 },
  { progress: 0.48, offset: -4.9, progressRadius: 0.013, offsetRadius: 1.0, seed: 9.3 },
  { progress: 0.55, offset: 5.3, progressRadius: 0.015, offsetRadius: 0.95, seed: 11.1 },
  { progress: 0.59, offset: 2.4, progressRadius: 0.011, offsetRadius: 0.72, seed: 12.0 },
  { progress: 0.63, offset: -5.4, progressRadius: 0.012, offsetRadius: 1.05, seed: 12.6 },
  { progress: 0.68, offset: -2.0, progressRadius: 0.01, offsetRadius: 0.7, seed: 13.4 },
  { progress: 0.71, offset: 4.7, progressRadius: 0.014, offsetRadius: 1.1, seed: 14.2 },
  { progress: 0.79, offset: -4.4, progressRadius: 0.013, offsetRadius: 0.9, seed: 15.9 },
  { progress: 0.83, offset: 2.2, progressRadius: 0.01, offsetRadius: 0.7, seed: 16.5 },
  { progress: 0.87, offset: 5.0, progressRadius: 0.014, offsetRadius: 1.05, seed: 17.4 },
  { progress: 0.94, offset: -4.8, progressRadius: 0.011, offsetRadius: 0.9, seed: 19.0 },
];
const MAP_GARDEN2_ROUTE_POINTS = [
  { x: 23.0, y: 58.0 },
  { x: 29.0, y: 56.0 },
  { x: 38.0, y: 54.0 },
  { x: 42.0, y: 51.0 },
  { x: 35.0, y: 50.0 },
  { x: 27.0, y: 54.0 },
  { x: 18.0, y: 50.0 },
  { x: 13.0, y: 44.0 },
  { x: 19.0, y: 37.0 },
  { x: 18.0, y: 30.0 },
  { x: 24.0, y: 24.0 },
  { x: 31.0, y: 19.0 },
  { x: 38.0, y: 14.0 },
  { x: 47.0, y: 11.0 },
  { x: 54.0, y: 8.0 },
  { x: 54.0, y: 4.0 },
];
const MAP_GARDEN2_SMALL_WALLS = [
  { progress: 0.07, offset: 3.6, progressRadius: 0.018, offsetRadius: 0.95, seed: 21.1 },
  { progress: 0.16, offset: -3.2, progressRadius: 0.016, offsetRadius: 0.8, seed: 22.4 },
  { progress: 0.21, offset: 1.7, progressRadius: 0.012, offsetRadius: 0.62, seed: 23.0 },
  { progress: 0.25, offset: 3.7, progressRadius: 0.014, offsetRadius: 0.85, seed: 23.9 },
  { progress: 0.38, offset: -3.6, progressRadius: 0.015, offsetRadius: 0.9, seed: 25.3 },
  { progress: 0.43, offset: 1.9, progressRadius: 0.012, offsetRadius: 0.62, seed: 26.1 },
  { progress: 0.49, offset: 3.3, progressRadius: 0.016, offsetRadius: 0.85, seed: 26.8 },
  { progress: 0.61, offset: -3.4, progressRadius: 0.014, offsetRadius: 0.8, seed: 28.2 },
  { progress: 0.66, offset: 1.6, progressRadius: 0.012, offsetRadius: 0.6, seed: 29.0 },
  { progress: 0.73, offset: 3.5, progressRadius: 0.016, offsetRadius: 0.9, seed: 29.7 },
  { progress: 0.86, offset: -3.2, progressRadius: 0.015, offsetRadius: 0.85, seed: 31.0 },
  { progress: 0.92, offset: 1.8, progressRadius: 0.011, offsetRadius: 0.58, seed: 32.4 },
];
const MAP_DENSE_WALL_FIELDS = [
  { x: 22.4, y: 47.3, radiusX: 7.4, radiusY: 5.4, cellSize: 2.35, wallRadiusMin: 0.58, wallRadiusMax: 0.92, fill: 0.86, seed: 41.2 },
];
const MAP_GARDEN2_DENSE_WALL_FIELDS = [
  { x: 48.8, y: 10.2, radiusX: 6.5, radiusY: 5.8, cellSize: 2.25, wallRadiusMin: 0.54, wallRadiusMax: 0.88, fill: 0.88, seed: 57.8 },
];
const MAP_GARDEN2_TILE_MASK = [
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111110001111111111",
  "1111111111111111111111111111111111111111111100000000000111111111",
  "1111111111111111111111111111111111111111000000001111111111111111",
  "1111111111111111111111001110000000000000000000111111111111111111",
  "1111111111111111110000000000000000000000001111111111110011111111",
  "1111111111111000000000000000000000000001111111111111100011111111",
  "1111111111100000000000000000000000001111111111111110000011111111",
  "1111111111000000000000000000000001111111111110000000000111111111",
  "1111111111000000000000110000000111111111100000000000011111111111",
  "1111111111100000000001110000001111111100000000000111111111111111",
  "1111111111000000000011110000011111111000000000011111111111111111",
  "1111111111000000001111100000011110000000000000111111111111111111",
  "1111111111000000011111100001111100000000000011111111000011111111",
  "1111111111100011111111000011100000000000000111111110000001111111",
  "1111111111111111111110000111000000000000001111111000000001111111",
  "1111111111111111111100000110000000000000011111110000000000111111",
  "1111111111111111111000000000001000000000011111100000000000111111",
  "1111111111111111110000000000011100000000111110000000000000111111",
  "1111111111111111100000000000111000000011111100000000000001111111",
  "1111111111111111000000000011111000000111111000000000000001111111",
  "1111111111111110000000000011110000001111110000000000000000111111",
  "1111111111111110000000000011111000011111100000010000000000111111",
  "1111111111111110000000000111110000011111000001111000000000111111",
  "1111111111111100000000011111110000111110000011111000000000011111",
  "1111111111111100000000111111100001111100000111110000000000011111",
  "1111111111111100000000111111000001111000001111110000000000111111",
  "1111111111111100000011111111000011110000011111100000000001111111",
  "1111111111111000000011111110000111110000011111100000000001111111",
  "1111111111111000000111111100001111100000111111100000000111111111",
  "1111111111110000011111111000011110000001111111000000011111111111",
  "1111111111110001111111100000111100000001111110000000111111111111",
  "1111111111110011111111000001111000000011111100000001111111111111",
  "1111111111111111111110000011110000000111111100000011111111111111",
  "1111111111111111111000000111100000011111111000000111111111111111",
  "1111111111111111110000001111000000111111100000001111100000111111",
  "1111111111111111100000011110000000111111100000011111000000111111",
  "1111111111111111000000111110000001111111000000111110000000111111",
  "1111111111111110000001111100000011111110000001111100000000111111",
  "1111111111111100000011111000000111111100000011111000000000111111",
  "1111111111111000000011110000011111111000001111110000000000111111",
  "1111111111111000000011100000111111110000001111100000000000111111",
  "1111111111110000000011000001111111100000011111000011100000011111",
  "1111111111110000000100000111111111100000111110000011100000011111",
  "1111111111110000000000001111111110000001111100000111100000011111",
  "1111111111110000000000001111111100000001111000001111100000011111",
  "1111111111110000000000011111111100000001111000011111000000111111",
  "1111111111110000000001111111111000000001110000111111000000111111",
  "1111111111110000000011111111110000000000000000111111000000111111",
  "1111111111100000000111111111100000000000000001111111000000111111",
  "1111111111100000001111111110000000000000000001111110000000111111",
  "1111111111100000011111111100000000000000000001111100000000111111",
  "1111111111100001111111111000000000000000000011111000000101111111",
  "1111111111100011111111110000000000000000000011111100111111111111",
  "1111111111100111111110000000000000001100110111111111111111111111",
  "1111111111111111111110000000111100011111111111111111111111111111",
  "1111111111111111111110000011111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
];
const MAP_DEFINITIONS = {
  garden: {
    routePoints: MAP_ROUTE_POINTS,
    smallWalls: MAP_SMALL_WALLS,
    denseWalls: MAP_DENSE_WALL_FIELDS,
    routeHalfWidth: MAP_ROUTE_HALF_WIDTH,
  },
  garden2: {
    routePoints: MAP_GARDEN2_ROUTE_POINTS,
    smallWalls: MAP_GARDEN2_SMALL_WALLS,
    denseWalls: MAP_GARDEN2_DENSE_WALL_FIELDS,
    routeHalfWidth: 6.4,
    tileMask: MAP_GARDEN2_TILE_MASK,
  },
};
const GARDEN2_PORTAL_RADIUS = 150;
const GARDEN2_PORTAL_DURATION_MS = 720;
const MAP_EDGE_DISTORT_AMPLITUDE = 2.35;
const MAP_EDGE_DISTORT_STEP = 3.5;
const MAP_WALL_LUMA_THRESHOLD = 110;
const MAP_WALL_COLOR = "#523e30";
const MAP_WALL_STROKE_COLOR = "#563618";
const MAP_WALL_HEX_COLOR = "#402f24";
const MAP_WALL_HEX_MIN_RADIUS = 7;
const MAP_WALL_HEX_MAX_RADIUS = 16;
const MAP_WALL_HEX_GLOBAL_MIN_DIST = 44;
const MAP_WALL_HEX_ROUND = 0.38;
const MAP_WALL_HEX_CELL = 64;
const AUTHOR_MAP_PREVIEW_SIZE = 420;
const MAP_COLLISION_SAMPLE_COUNT = 48;
const MAP_COLLISION_SIZE = 4096;
const MONSTER_COLLISION_SAMPLE_COUNT = 14;
const MONSTER_FULL_SIMULATE_MARGIN = 1200;
const MONSTER_PLAYER_ACTIVE_RADIUS = 2300;
const MONSTER_FAR_UPDATE_MS = 720;
const MONSTER_SPAWN_EXTRA_SPACING = 72;
const BASE_PLAYER_BODY_DAMAGE = 50;
const PLAYER_BODY_DAMAGE_TALENT_BONUS = 0.28;
const PLAYER_BODY_DAMAGE_COOLDOWN_MS = 100;
const MONSTER_BOSS_BAR_MIN_TIER_NUMBER = 12;
const MAX_MONSTER_BOSS_BARS = 4;
const DRAW_CULL_MARGIN = 650;
const DAMAGE_NUMBER_DURATION_MS = 650;
const DAMAGE_NUMBER_WINDOW_MS = 300;
const BACKGROUND_TICK_MS = 250;
const MAX_CATCH_UP_SECONDS = 2;
const MENU_FLOATING_PETAL_COUNT = 22;
const MENU_FLOATING_PETAL_SPEED = 110;
const HIGH_TIER_TRAIL_START_INDEX = 9;
const AUTHOR_TELEPORT_INVULNERABLE_MS = 2000;
const AUTHOR_TELEPORT_PUSH_RADIUS = 760;
const AUTHOR_TELEPORT_PUSH_STEP = 90;
const NORMAL_MONSTER_SIZE_GROWTH = 1.3;
const HIGH_TIER_MONSTER_SIZE_GROWTH = 1.12;
const CYAN_TIER_INDEX = TIERS.findIndex((tier) => tier.color === "#28f0ff");
const MONSTER_COLLISION_CELL_SIZE = 1400;
const TALENT_DEFINITIONS = [
  { id: "maxHealth", labelKey: "talentMaxHealth", maxLevel: 10 },
  { id: "vision", labelKey: "talentVision", maxLevel: 10 },
  { id: "petalRefresh", labelKey: "talentPetalRefresh", maxLevel: 10 },
  { id: "magnet", labelKey: "talentMagnet", maxLevel: 10 },
  { id: "regen", labelKey: "talentRegen", maxLevel: 10 },
  { id: "bodyDamage", labelKey: "talentBodyDamage", maxLevel: 10 },
  { id: "petalSpeed", labelKey: "talentPetalSpeed", maxLevel: 10 },
  { id: "petalDurability", labelKey: "talentPetalDurability", maxLevel: 10 },
  { id: "equipmentSlots", labelKey: "talentEquipmentSlots", maxLevel: 5 },
  { id: "moveSpeed", labelKey: "talentMoveSpeed", maxLevel: 10 },
  { id: "extraDrop", labelKey: "talentExtraDrop", maxLevel: 10 },
  { id: "experience", labelKey: "talentExperience", maxLevel: 10 },
  { id: "damageReduction", labelKey: "talentDamageReduction", maxLevel: 10 },
  { id: "craftChance", labelKey: "talentCraftChance", maxLevel: 10 },
  { id: "attackRange", labelKey: "talentAttackRange", maxLevel: 10 },
];
let antHellNoticeTimeout = 0;
let talentHoldTimer = 0;
let nextDamageNumberId = 1;
let backgroundTickTimer = 0;
let nextItemId = 1;
let dragData = null;
let dragDropCompleted = false;

function getTier(tierIndex = 0) {
  return TIERS[clamp(Math.round(tierIndex), 0, TIERS.length - 1)];
}

function getTierIndexByName(name) {
  return TIERS.findIndex((tier) => tier.name === name);
}

function scaleStatByTier(baseValue, multiplier, tierIndex) {
  return Math.round(baseValue * multiplier ** getTier(tierIndex).index);
}

function getPlayerExperienceGrowthMultiplier(currentLevel) {
  if (currentLevel < 3) return 1;
  if (currentLevel < 12) return 1.36;
  if (currentLevel < 19) return 1.25;
  if (currentLevel < 26) return 1.15;
  if (currentLevel < 40) return 1.18;
  if (currentLevel < 80) return 1.17;
  if (currentLevel < 100) return 1.08;
  if (currentLevel < 120) return 1.14;
  if (currentLevel < 140) return 1.08;
  if (currentLevel < 170) return 1.1;
  if (currentLevel < 200) return 1.11;
  if (currentLevel < 230) return 1.12;
  if (currentLevel < 250) return 1.13;
  if (currentLevel < 265) return 1.15;
  if (currentLevel < 275) return 1.17;
  return 1.18;
}

function getNextExperienceForLevel(level) {
  const currentLevel = Math.max(1, Math.floor(level));
  if (currentLevel <= 1) return 82;
  if (currentLevel === 2) return 200;

  let requiredExperience = 200;
  for (let nextLevel = 3; nextLevel <= currentLevel; nextLevel++) {
    requiredExperience = Math.round(
      requiredExperience * getPlayerExperienceGrowthMultiplier(nextLevel),
    );
  }

  return Math.max(1, requiredExperience);
}

function getMonsterExperienceReward(tierIndex) {
  return scaleStatByTier(BEE_STATS.experienceReward, MONSTER_EXPERIENCE_TIER_MULTIPLIER, tierIndex);
}

function scaleSizeByTier(baseValue, tierIndex) {
  const index = getTier(tierIndex).index;
  const highTierStartIndex = CYAN_TIER_INDEX < 0 ? TIERS.length : CYAN_TIER_INDEX;

  if (index < highTierStartIndex) {
    return baseValue * NORMAL_MONSTER_SIZE_GROWTH ** index;
  }

  return (
    baseValue *
    NORMAL_MONSTER_SIZE_GROWTH ** Math.max(0, highTierStartIndex - 1) *
    HIGH_TIER_MONSTER_SIZE_GROWTH ** (index - highTierStartIndex + 1)
  );
}

function rollMonsterTierIndex() {
  let tierIndex = 0;

  while (tierIndex < TIERS.length - 1 && Math.random() < 0.16) {
    tierIndex += 1;
  }

  return tierIndex;
}

function getPetalBaseMaxDurability(name, tierIndex) {
  const tier = getTier(tierIndex);
  const definition = PETAL_DEFINITIONS[name] || PETAL_DEFINITIONS.Basic;

  if (definition.referenceTierNumber && definition.baseDurability) {
    const exponent = tier.index - (definition.referenceTierNumber - 1);
    return Math.round(definition.baseDurability * (definition.durabilityTierMultiplier || 2) ** exponent);
  }
  if (definition.fixedDurability) return definition.baseDurability;

  return scaleStatByTier(definition.baseDurability, PETAL_DURABILITY_TIER_MULTIPLIER, tier.index);
}

function getPetalAttack(name, tierIndex) {
  const tier = getTier(tierIndex);
  const definition = PETAL_DEFINITIONS[name] || PETAL_DEFINITIONS.Basic;

  if (definition.referenceTierNumber && definition.baseAttack) {
    const exponent = tier.index - (definition.referenceTierNumber - 1);
    return Math.round(definition.baseAttack * (definition.attackTierMultiplier || 3) ** exponent);
  }

  return scaleStatByTier(definition.baseAttack, 3, tier.index);
}

function getLightOrbCount(tierIndex = 0) {
  const tierNumber = getTier(tierIndex).index + 1;
  if (tierNumber <= 4) return 1;
  if (tierNumber <= 10) return 2;
  if (tierNumber <= 15) return 13;
  return 14;
}

function getPetalOrbitUnitCount(petal) {
  if (!petal) return 0;
  if (petal.name === "Light") return getLightOrbCount(petal.tierIndex);
  return 1;
}

function createPetalUnitState(petal, savedState = null) {
  const durability = clamp(
    savedState?.durability ?? petal.maxDurability,
    0,
    petal.maxDurability,
  );

  return {
    active: savedState?.active ?? true,
    durability: durability <= 0 ? petal.maxDurability : durability,
    readyAt: savedState?.readyAt || 0,
    cooldownStartedAt: savedState?.cooldownStartedAt || 0,
  };
}

function syncPetalActiveState(petal) {
  if (!petal) return;
  if (petal.name !== "Light") return;
  if (!Array.isArray(petal.orbs) || petal.orbs.length === 0) return;

  petal.active = petal.orbs.some((orb) => orb.active);
  petal.durability = Math.max(...petal.orbs.map((orb) => orb.durability));
}

function ensureLightOrbStates(petal, savedStates = null) {
  if (!petal || petal.name !== "Light") return;

  const count = getLightOrbCount(petal.tierIndex);
  if (!savedStates && Array.isArray(petal.orbs) && petal.orbs.length === count) {
    syncPetalActiveState(petal);
    return;
  }

  const currentStates = Array.isArray(savedStates) ? savedStates : petal.orbs || [];
  petal.orbs = Array.from({ length: count }, (_, index) =>
    createPetalUnitState(petal, currentStates[index]),
  );
  syncPetalActiveState(petal);
}

function getPetalUnitState(petal, unitIndex = 0) {
  if (!petal) return null;
  if (petal.name !== "Light") return petal;
  ensureLightOrbStates(petal);
  return petal.orbs[unitIndex] || petal.orbs[0] || null;
}

function isPetalUnitActive(petal, unitIndex = 0) {
  const unitState = getPetalUnitState(petal, unitIndex);
  return Boolean(unitState?.active);
}

function createPetalItem(name = "Basic", tierIndex = 0) {
  const definition = PETAL_DEFINITIONS[name] || PETAL_DEFINITIONS.Basic;
  const minTierIndex = Math.max(0, (definition.minTierNumber || 1) - 1);
  const tier = getTier(Math.max(tierIndex, minTierIndex));
  const maxDurability = getPetalBaseMaxDurability(name, tier.index);

  const item = {
    id: nextItemId++,
    name: PETAL_DEFINITIONS[name] ? name : "Basic",
    asset: definition.asset,
    tierIndex: tier.index,
    tier: tier.name,
    tierColor: tier.color,
    baseMaxDurability: maxDurability,
    fixedDurability: Boolean(definition.fixedDurability),
    maxDurability,
    durability: maxDurability,
    baseRespawnMs: definition.baseRespawnMs,
    durabilityCost: definition.durabilityCost,
    placeableBarrier: Boolean(definition.placeableBarrier),
    placed: false,
    placedX: 0,
    placedY: 0,
    placedAngle: 0,
    placedAt: 0,
    nextBarrierDamageAt: 0,
    attack: getPetalAttack(name, tier.index),
    healAmount: definition.baseHeal ? scaleStatByTier(definition.baseHeal, 2.2, tier.index) : 0,
    active: true,
    readyAt: 0,
    cooldownStartedAt: 0,
  };

  if (item.name === "Light") ensureLightOrbStates(item);
  return item;
}

function startPetalCooldown(petal, time) {
  petal.active = false;
  petal.cooldownStartedAt = time;
  petal.readyAt = time + getPetalCooldownMs(petal);
}

function startPetalUnitCooldown(petal, unitIndex, time) {
  if (petal?.name !== "Light") {
    startPetalCooldown(petal, time);
    return;
  }

  const unitState = getPetalUnitState(petal, unitIndex);
  if (!unitState) return;
  unitState.active = false;
  unitState.cooldownStartedAt = time;
  unitState.readyAt = time + getPetalCooldownMs(petal);
  unitState.durability = 0;
  syncPetalActiveState(petal);
}

function getPetalRechargeProgress(petal, time = state.lastTime) {
  if (!petal || petal.active) return 1;
  const start = petal.cooldownStartedAt || Math.max(0, (petal.readyAt || time) - getPetalCooldownMs(petal));
  const duration = Math.max(1, (petal.readyAt || time) - start);
  return clamp((time - start) / duration, 0, 1);
}

function getPetalUnitRechargeProgress(petal, unitIndex = 0, time = state.lastTime) {
  const unitState = getPetalUnitState(petal, unitIndex);
  if (!unitState || unitState.active) return 1;
  const start = unitState.cooldownStartedAt || Math.max(0, (unitState.readyAt || time) - getPetalCooldownMs(petal));
  const duration = Math.max(1, (unitState.readyAt || time) - start);
  return clamp((time - start) / duration, 0, 1);
}

function createMonster(speciesName = "Bee", x, y, direction = 1, tierIndex = 0) {
  const definition = MONSTER_DEFINITIONS[speciesName] || MONSTER_DEFINITIONS.Bee;
  const stats = definition.stats;
  const moveAngle = direction > 0 ? 0 : Math.PI;
  const tier = getTier(tierIndex);
  const maxHealth = scaleStatByTier(stats.maxHealth, 4.5, tier.index);
  const sizeScale = scaleSizeByTier(1, tier.index);

  return {
    name: speciesName,
    asset: definition.asset,
    tierIndex: tier.index,
    tier: tier.name,
    tierColor: tier.color,
    x,
    y,
    anchorX: x,
    anchorY: y,
    radius: stats.radius * sizeScale,
    width: stats.width * sizeScale,
    height: stats.height * sizeScale,
    hitShape: stats.hitShape || "ellipse",
    hitRadius: (stats.hitRadius || Math.max(stats.hitRadiusX, stats.hitRadiusY)) * sizeScale,
    hitRadiusX: stats.hitRadiusX * sizeScale,
    hitRadiusY: stats.hitRadiusY * sizeScale,
    stationary: Boolean(stats.stationary),
    maxHealth,
    health: maxHealth,
    attack: scaleStatByTier(stats.attack, MONSTER_ATTACK_TIER_MULTIPLIER, tier.index),
    experienceReward: getMonsterExperienceReward(tier.index),
    bodyDamageCooldown: stats.bodyDamageCooldown,
    nextBodyDamageAt: 0,
    direction,
    moveAngle,
    targetMoveAngle: moveAngle,
    faceAngle: moveAngle + Math.PI / 2,
    wobbleSeed: Math.random() * Math.PI * 2,
    wobbleSpeed: 2.8 + Math.random() * 0.8,
    wobbleAmount: 0.11 + Math.random() * 0.035,
    bobAmount: 2.4 + Math.random() * 1.2,
    speed: 16 + Math.random() * 40,
    targetSpeed: 16 + Math.random() * 40,
    nextDecisionAt: Math.random() * 900,
    hitFlash: 0,
    lastPlayerHitAt: 0,
    alive: true,
    dying: false,
    hidden: false,
    deathStartedAt: 0,
    deathDuration: DEATH_ANIMATION_MS,
  };
}

function createBee(x, y, direction = 1, tierIndex = 0) {
  return createMonster("Bee", x, y, direction, tierIndex);
}

function serializePetalItem(item) {
  if (!item || isLeaderboardRewardPetal(item)) return null;

  return {
    name: item.name,
    tierIndex: item.tierIndex,
    durability: item.durability,
    orbs: item.name === "Light" && Array.isArray(item.orbs)
      ? item.orbs.map((orb) => ({ durability: orb.durability }))
      : undefined,
  };
}

function restorePetalItem(savedItem) {
  if (!savedItem) return null;

  const item = createPetalItem(savedItem.name || "Basic", savedItem.tierIndex || 0);
  item.durability = clamp(savedItem.durability ?? item.maxDurability, 0, item.maxDurability);
  if (item.durability <= 0) item.durability = item.maxDurability;
  item.active = true;
  item.readyAt = 0;
  item.cooldownStartedAt = 0;
  if (item.name === "Light") ensureLightOrbStates(item, savedItem.orbs);
  return item;
}

function createSaveData() {
  return {
    player: {
      name: state.player.name,
      baseMaxHealth: state.player.baseMaxHealth,
      health: state.player.health,
      level: state.player.level,
      experience: state.player.experience,
      nextExperience: state.player.nextExperience,
      talentPoints: state.player.talentPoints,
      earnedTalentPoints: state.player.earnedTalentPoints,
      talents: { ...state.player.talents },
    },
    inventory: state.inventory.map(serializePetalItem).filter(Boolean),
    petals: state.weapon.petals.map(serializePetalItem),
    secondaryPetals: state.weapon.secondaryPetals.map(serializePetalItem),
    savedAt: Date.now(),
  };
}

function applySaveData(saveData) {
  if (!saveData?.player) return;

  state.player.name = saveData.player.name || state.player.name;
  state.player.level = saveData.player.level || 1;
  state.player.baseMaxHealth = Math.max(
    saveData.player.baseMaxHealth || BASE_PLAYER_MAX_HEALTH,
    getBaseMaxHealthForLevel(state.player.level),
  );
  state.player.experience = saveData.player.experience || 0;
  state.player.nextExperience = getNextExperienceForLevel(state.player.level);
  state.player.talentPoints = saveData.player.talentPoints || 0;
  state.player.earnedTalentPoints = saveData.player.earnedTalentPoints || state.player.talentPoints;
  state.player.talents = {
    ...Object.fromEntries(TALENT_DEFINITIONS.map((talent) => [talent.id, 0])),
    ...(saveData.player.talents || {}),
  };
  state.inventory = (saveData.inventory || []).map(restorePetalItem).filter(Boolean);
  state.weapon.petals = Array.from({ length: MAX_EQUIPMENT_SLOTS }, (_, index) =>
    restorePetalItem(saveData.petals?.[index] || null),
  );
  state.weapon.secondaryPetals = Array.from({ length: MAX_EQUIPMENT_SLOTS }, (_, index) =>
    restorePetalItem(saveData.secondaryPetals?.[index] || null),
  );
  refreshPlayerMaxHealth();
  state.player.health = clamp(saveData.player.health || state.player.maxHealth, 1, state.player.maxHealth);
  applyTalentEffects();
  grantTalentPoint();
  nameInput.value = state.player.name;
}

const state = {
  dpr: 1,
  width: 0,
  height: 0,
  lastTime: 0,
  startedAt: performance.now(),
  spawned: false,
  mode: "garden",
  mapId: "garden",
  accountName: "",
  uiLockMovement: false,
  settings: {
    movement: "mouse",
    layout: "auto",
    language: "zh",
    music: false,
    cameraMode: "locked",
    quality: "medium",
    showHitboxes: false,
    reverseAttack: false,
    showPlayerHealthBar: true,
    showOtherPetals: true,
    showDamageNumbers: true,
    resolvedLayout: "desktop",
  },
  input: {
    up: false,
    down: false,
    left: false,
    right: false,
    attack: false,
    defend: false,
    joystickX: 0,
    joystickY: 0,
    joystickOriginX: 0,
    joystickOriginY: 0,
    joystickPointerId: null,
    cameraUp: false,
    cameraDown: false,
    cameraLeft: false,
    cameraRight: false,
  },
  player: {
    name: "玩家",
    x: 0,
    y: 0,
    radius: 42,
    hitRadius: 42,
    speed: 258,
    baseMaxHealth: BASE_PLAYER_MAX_HEALTH,
    maxHealth: BASE_PLAYER_MAX_HEALTH,
    health: BASE_PLAYER_MAX_HEALTH,
    level: 1,
    experience: 0,
    nextExperience: getNextExperienceForLevel(1),
    talentPoints: 0,
    earnedTalentPoints: 0,
    talents: Object.fromEntries(TALENT_DEFINITIONS.map((talent) => [talent.id, 0])),
    hitFlash: 0,
    alive: true,
    dying: false,
    hidden: false,
    deathStartedAt: 0,
    deathDuration: DEATH_ANIMATION_MS,
    invulnerableUntil: 0,
  },
  weapon: {
    count: BASE_EQUIPMENT_SLOTS,
    angle: 0,
    orbitRadius: 92,
    targetRadius: 92,
    neutralRadius: 92,
    attackRadius: 148,
    defendRadius: 58,
    size: 44,
    hitRadius: 17,
    petals: Array.from({ length: MAX_EQUIPMENT_SLOTS }, (_, index) =>
      index < BASE_EQUIPMENT_SLOTS ? createPetalItem(index === 0 ? "Pollen" : "Basic", 0) : null,
    ),
    secondaryPetals: Array.from({ length: MAX_EQUIPMENT_SLOTS }, () => null),
  },
  camera: { x: 0, y: 0, freeX: 0, freeY: 0 },
  inventory: [],
  crafting: {
    stackKey: "",
    groups: 0,
    message: "",
    animating: false,
  },
  forging: {
    stackKey: "",
    groups: 0,
    message: "",
    animating: false,
  },
  leaderboardRewardPetal: null,
  lastLeaderboardRenderAt: 0,
  author: {
    codeBuffer: "",
    verified: false,
    selectedX: 0,
    selectedY: 0,
    hasSelection: false,
  },
  drops: [],
  damageNumbers: [],
  monsters: [],
  monsterSpawnSequence: Array(TIERS.length).fill(0),
  menuPetals: [],
  nextMonsterSpawnAt: 0,
  portalTransition: {
    active: false,
    startedAt: 0,
    duration: GARDEN2_PORTAL_DURATION_MS,
    targetMapId: "garden2",
    x: 0,
    y: 0,
  },
  pointer: { x: 0, y: 0, worldX: 0, worldY: 0, active: false },
  eyeLook: { x: 0, y: -0.3 },
  controls: { attack: false, defend: false },
  assets: {},
  mapCollision: null,
  mapArtCanvas: null,
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function clampToMapX(x, padding = 0) {
  return clamp(x, -MAP_HALF_WIDTH + padding, MAP_HALF_WIDTH - padding);
}

function clampToMapY(y, padding = 0) {
  return clamp(y, -MAP_HALF_HEIGHT + padding, MAP_HALF_HEIGHT - padding);
}

function clampEntityToMap(entity, padding = entity.radius || 0) {
  entity.x = clampToMapX(entity.x, padding);
  entity.y = clampToMapY(entity.y, padding);
}

function worldToMapPixel(x, y) {
  const map = state.mapCollision;
  if (!map) return null;

  return {
    x: Math.floor(((x + MAP_HALF_WIDTH) / MAP_WIDTH) * map.width),
    y: Math.floor(((y + MAP_HALF_HEIGHT) / MAP_HEIGHT) * map.height),
  };
}

function isWallAtWorld(x, y) {
  const map = state.mapCollision;
  const pixel = worldToMapPixel(x, y);

  if (!map || !pixel) return false;
  if (pixel.x < 0 || pixel.x >= map.width || pixel.y < 0 || pixel.y >= map.height) return true;
  if (
    pixel.x < map.playBounds.minX ||
    pixel.x > map.playBounds.maxX ||
    pixel.y < map.playBounds.minY ||
    pixel.y > map.playBounds.maxY
  ) {
    return true;
  }

  const index = (pixel.y * map.width + pixel.x) * 4;
  const red = map.data[index];
  const green = map.data[index + 1];
  const blue = map.data[index + 2];
  const alpha = map.data[index + 3];
  const luma = red * 0.2126 + green * 0.7152 + blue * 0.0722;

  return alpha > 16 && luma < MAP_WALL_LUMA_THRESHOLD;
}

function isCircleBlockedByMap(x, y, radius, sampleCount = MAP_COLLISION_SAMPLE_COUNT) {
  if (!state.mapCollision) return false;
  if (isWallAtWorld(x, y)) return true;

  const rings = [radius * 0.35, radius * 0.7, radius];
  for (const ringRadius of rings) {
    for (let index = 0; index < sampleCount; index++) {
      const angle = (index / sampleCount) * Math.PI * 2;
      if (isWallAtWorld(x + Math.cos(angle) * ringRadius, y + Math.sin(angle) * ringRadius)) {
        return true;
      }
    }
  }

  return false;
}

function moveCircleEntityWithMapCollision(
  entity,
  nextX,
  nextY,
  radius,
  sampleCount = MAP_COLLISION_SAMPLE_COUNT,
) {
  const startX = entity.x;
  const startY = entity.y;

  if (!isCircleBlockedByMap(nextX, nextY, radius, sampleCount)) {
    entity.x = nextX;
    entity.y = nextY;
    return true;
  }

  let moved = false;
  if (!isCircleBlockedByMap(nextX, startY, radius, sampleCount)) {
    entity.x = nextX;
    moved = true;
  }
  if (!isCircleBlockedByMap(entity.x, nextY, radius, sampleCount)) {
    entity.y = nextY;
    moved = true;
  }

  return moved;
}

function findNearestFloorPosition(startX, startY, radius) {
  if (!isCircleBlockedByMap(startX, startY, radius)) {
    return { x: startX, y: startY };
  }

  for (let searchRadius = 140; searchRadius < Math.min(MAP_HALF_WIDTH, MAP_HALF_HEIGHT); searchRadius += 140) {
    const samples = Math.max(24, Math.ceil((searchRadius * Math.PI * 2) / 220));

    for (let index = 0; index < samples; index++) {
      const angle = (index / samples) * Math.PI * 2;
      const x = clampToMapX(startX + Math.cos(angle) * searchRadius, radius);
      const y = clampToMapY(startY + Math.sin(angle) * searchRadius, radius);

      if (!isCircleBlockedByMap(x, y, radius)) {
        return { x, y };
      }
    }
  }

  return { x: clampToMapX(startX, radius), y: clampToMapY(startY, radius) };
}

function lerpAngle(from, to, amount) {
  const wrapped = Math.atan2(Math.sin(to - from), Math.cos(to - from));
  return from + wrapped * amount;
}

function clampCameraToMap() {
  const viewScale = getViewScale();
  const halfViewWidth = state.width / (2 * viewScale);
  const halfViewHeight = state.height / (2 * viewScale);

  state.camera.x =
    MAP_WIDTH <= state.width / viewScale
      ? 0
      : clamp(state.camera.x, -MAP_HALF_WIDTH + halfViewWidth, MAP_HALF_WIDTH - halfViewWidth);
  state.camera.y =
    MAP_HEIGHT <= state.height / viewScale
      ? 0
      : clamp(
          state.camera.y,
          -MAP_HALF_HEIGHT + halfViewHeight,
          MAP_HALF_HEIGHT - halfViewHeight,
        );
}

function getQualityDprLimit() {
  if (state.settings.quality === "low") return 1;
  if (state.settings.quality === "high") return 2;
  return 1.5;
}

function resize() {
  state.dpr = Math.min(window.devicePixelRatio || 1, getQualityDprLimit());
  state.width = window.innerWidth;
  state.height = window.innerHeight;
  canvas.width = Math.floor(state.width * state.dpr);
  canvas.height = Math.floor(state.height * state.dpr);
  minimapCanvas.width = Math.floor(MINIMAP_WIDTH * state.dpr);
  minimapCanvas.height = Math.floor(MINIMAP_HEIGHT * state.dpr);
  portraitCanvas.width = Math.floor(PORTRAIT_SIZE * state.dpr);
  portraitCanvas.height = Math.floor(PORTRAIT_SIZE * state.dpr);
  ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  minimapCtx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  portraitCtx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  state.pointer.x = state.pointer.active ? state.pointer.x : state.width / 2;
  state.pointer.y = state.pointer.active ? state.pointer.y : state.height / 2;
  updatePointerWorld();
  applyLayoutMode();
  seedMenuFloatingPetals();
}

function seedMenuFloatingPetals() {
  const assetNames = ["basic", "rose", "pollen", "stinger", "light"];
  const width = Math.max(1, state.width);
  const height = Math.max(1, state.height);

  state.menuPetals = Array.from({ length: MENU_FLOATING_PETAL_COUNT }, (_, index) => {
    const seed = index + 1;
    return {
      asset: assetNames[index % assetNames.length],
      x: gardenHash(seed, 2.1, 31) * width,
      y: gardenHash(seed, 5.7, 32) * height,
      size: 32 + gardenHash(seed, 9.3, 33) * 34,
      speed: MENU_FLOATING_PETAL_SPEED * (0.55 + gardenHash(seed, 12.8, 34) * 0.9),
      drift: 12 + gardenHash(seed, 16.4, 35) * 32,
      phase: gardenHash(seed, 21.6, 36) * Math.PI * 2,
      rotation: gardenHash(seed, 24.2, 37) * Math.PI * 2,
      spin: (gardenHash(seed, 27.9, 38) - 0.5) * 1.8,
      alpha: 0.36 + gardenHash(seed, 30.5, 39) * 0.3,
    };
  });
}

function updatePointerWorld() {
  const viewScale = getViewScale();
  state.pointer.worldX = state.camera.x + (state.pointer.x - state.width / 2) / viewScale;
  state.pointer.worldY = state.camera.y + (state.pointer.y - state.height / 2) / viewScale;
}

function loadImage(name, src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve([name, image]);
    image.onerror = () => reject(new Error(`Failed to load ${src}`));
    image.src = src;
  });
}

async function waitForImage(image) {
  if (!image) return;
  if (!image.complete) {
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });
  }
  if (image.decode) {
    await image.decode().catch(() => {});
  }
}

async function loadAssets() {
  const entries = Object.entries(ASSETS);
  let loaded = 0;

  loadingBar.style.width = "12%";

  const promises = entries.map(([name, src]) =>
    loadImage(name, src).then((asset) => {
      loaded += 1;
      loadingBar.style.width = `${12 + Math.round((loaded / entries.length) * 82)}%`;
      return asset;
    }),
  );

  const loadedAssets = await Promise.all(promises);
  state.assets = Object.fromEntries(loadedAssets);
  buildMapCollisionData();
  buildMapArtCanvas();
  await waitForImage(loadingArt);
  loadingBar.style.width = "100%";
}

function buildMapCollisionData() {
  const collisionCanvas = document.createElement("canvas");
  collisionCanvas.width = MAP_COLLISION_SIZE;
  collisionCanvas.height = MAP_COLLISION_SIZE;

  const collisionCtx = collisionCanvas.getContext("2d", { willReadFrequently: true });
  drawCollisionMap(collisionCtx, MAP_COLLISION_SIZE, MAP_COLLISION_SIZE);

  const imageData = collisionCtx.getImageData(0, 0, collisionCanvas.width, collisionCanvas.height);
  const playBounds = findMapWallBounds(imageData.data, collisionCanvas.width, collisionCanvas.height);

  state.mapCollision = {
    width: collisionCanvas.width,
    height: collisionCanvas.height,
    canvas: collisionCanvas,
    data: imageData.data,
    playBounds,
  };
}

function buildMapArtCanvas() {
  const artCanvas = document.createElement("canvas");
  artCanvas.width = MAP_ART_SIZE;
  artCanvas.height = MAP_ART_SIZE;

  const artCtx = artCanvas.getContext("2d");
  artCtx.imageSmoothingEnabled = false;
  artCtx.fillStyle = MAP_WALL_COLOR;
  artCtx.strokeStyle = MAP_WALL_STROKE_COLOR;
  drawMapWallShapes(artCtx, {
    drawStroke: true,
    fillSeams: true,
    clipStrokeToFill: true,
    strokeStyle: MAP_WALL_STROKE_COLOR,
    lineWidth: 1.15,
  });
  state.mapArtCanvas = artCanvas;
}

function drawCollisionMap(targetCtx, width, height) {
  const scaleX = width / MAP_ART_SIZE;
  const scaleY = height / MAP_ART_SIZE;

  targetCtx.save();
  targetCtx.imageSmoothingEnabled = false;
  targetCtx.scale(scaleX, scaleY);
  targetCtx.fillStyle = "#fffdf1";
  targetCtx.fillRect(0, 0, MAP_ART_SIZE, MAP_ART_SIZE);
  targetCtx.fillStyle = "#050505";
  targetCtx.strokeStyle = "#050505";
  drawMapWallShapes(targetCtx);
  targetCtx.restore();
}

function mapEdgeNoise(x, y) {
  const seed = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return (seed - Math.floor(seed)) * 2 - 1;
}

function getActiveMapDefinition() {
  return MAP_DEFINITIONS[state.mapId] || MAP_DEFINITIONS.garden;
}

function getCurrentMonsterTierConfig() {
  return MAP_MONSTER_TIER_CONFIGS[state.mapId] || MAP_MONSTER_TIER_CONFIGS.garden;
}

function getActiveMonsterMinTierIndex() {
  const index = getTierIndexByName(getCurrentMonsterTierConfig().minTierName);
  return index < 0 ? 0 : index;
}

function getActiveMonsterMaxTierIndex() {
  const minTierIndex = getActiveMonsterMinTierIndex();
  const index = getTierIndexByName(getCurrentMonsterTierConfig().maxTierName);
  return index < minTierIndex ? minTierIndex : index;
}

function getActiveMonsterTierCount() {
  return getActiveMonsterMaxTierIndex() - getActiveMonsterMinTierIndex() + 1;
}

function getHighestMonsterTierProgressStart() {
  return getActiveMonsterTierCount() > 1 ? 0.84 : 0;
}

function getMonsterTierTargetCounts() {
  const config = getCurrentMonsterTierConfig();
  const minTierIndex = getActiveMonsterMinTierIndex();
  const maxTierIndex = getActiveMonsterMaxTierIndex();

  return Array.from({ length: TIERS.length }, (_, tierIndex) => {
    if (tierIndex < minTierIndex || tierIndex > maxTierIndex) return 0;
    return config.targetCounts[tierIndex - minTierIndex] || 0;
  });
}

function getMaxMonstersForCurrentMap() {
  return getMonsterTierTargetCounts().reduce((total, count) => total + count, 0);
}

function getRouteSegments(routePoints = getActiveMapDefinition().routePoints) {
  const segments = [];
  let totalLength = 0;

  for (let index = 0; index < routePoints.length - 1; index++) {
    const start = routePoints[index];
    const end = routePoints[index + 1];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.hypot(dx, dy);
    segments.push({ start, end, dx, dy, length, startDistance: totalLength });
    totalLength += length;
  }

  return { segments, totalLength };
}

let MAP_ROUTE = getRouteSegments(MAP_ROUTE_POINTS);

function getRouteProjection(tileX, tileY) {
  let best = {
    distance: Infinity,
    progress: 0,
    x: getActiveMapDefinition().routePoints[0].x,
    y: getActiveMapDefinition().routePoints[0].y,
    normalX: 0,
    normalY: 1,
  };

  for (const segment of MAP_ROUTE.segments) {
    const segmentLengthSquared = segment.length * segment.length || 1;
    const rawT =
      ((tileX - segment.start.x) * segment.dx + (tileY - segment.start.y) * segment.dy) /
      segmentLengthSquared;
    const t = clamp(rawT, 0, 1);
    const x = segment.start.x + segment.dx * t;
    const y = segment.start.y + segment.dy * t;
    const distance = Math.hypot(tileX - x, tileY - y);

    if (distance < best.distance) {
      best = {
        distance,
        progress: (segment.startDistance + segment.length * t) / MAP_ROUTE.totalLength,
        x,
        y,
        normalX: segment.length ? -segment.dy / segment.length : 0,
        normalY: segment.length ? segment.dx / segment.length : 1,
      };
    }
  }

  return best;
}

function getRouteSignedOffset(tileX, tileY, projection = getRouteProjection(tileX, tileY)) {
  return (tileX - projection.x) * projection.normalX + (tileY - projection.y) * projection.normalY;
}

function worldToRouteTilePoint(x, y) {
  return {
    x: ((x + MAP_HALF_WIDTH) / MAP_WIDTH) * MAP_TILE_COLUMNS,
    y: ((y + MAP_HALF_HEIGHT) / MAP_HEIGHT) * MAP_TILE_ROWS,
  };
}

function routeTileToWorld(tileX, tileY) {
  return {
    x: (tileX / MAP_TILE_COLUMNS) * MAP_WIDTH - MAP_HALF_WIDTH,
    y: (tileY / MAP_TILE_ROWS) * MAP_HEIGHT - MAP_HALF_HEIGHT,
  };
}

function getRouteWorldPosition(progress, sideOffset = 0) {
  const routeDistance = clamp(progress, 0, 1) * MAP_ROUTE.totalLength;
  const segment =
    MAP_ROUTE.segments.find(
      (entry) => routeDistance >= entry.startDistance && routeDistance <= entry.startDistance + entry.length,
    ) || MAP_ROUTE.segments[MAP_ROUTE.segments.length - 1];
  const localDistance = clamp(routeDistance - segment.startDistance, 0, segment.length);
  const t = segment.length ? localDistance / segment.length : 0;
  const baseX = segment.start.x + segment.dx * t;
  const baseY = segment.start.y + segment.dy * t;
  const normalX = segment.length ? -segment.dy / segment.length : 0;
  const normalY = segment.length ? segment.dx / segment.length : 1;

  return routeTileToWorld(baseX + normalX * sideOffset, baseY + normalY * sideOffset);
}

function getRouteProgressForWorld(x, y) {
  const point = worldToRouteTilePoint(x, y);
  return getRouteProjection(point.x, point.y).progress;
}

function getPlayerSpawnWorldPosition() {
  const firstPoint = getActiveMapDefinition().routePoints[0];
  return routeTileToWorld(firstPoint.x, firstPoint.y);
}

function isMapWallTile(tileX, tileY) {
  if (tileX < 0 || tileY < 0 || tileX >= MAP_TILE_COLUMNS || tileY >= MAP_TILE_ROWS) return true;

  const activeMap = getActiveMapDefinition();
  if (activeMap.tileMask) {
    if (activeMap.tileMask[tileY]?.[tileX] !== "0") return true;

    const projection = getRouteProjection(tileX + 0.5, tileY + 0.5);
    const signedOffset = getRouteSignedOffset(tileX + 0.5, tileY + 0.5, projection);
    if (isDenseMapWallFieldTile(tileX, tileY)) return true;
    return isSmallMapWallTile(projection, signedOffset, tileX, tileY);
  }

  const projection = getRouteProjection(tileX + 0.5, tileY + 0.5);
  const signedOffset = getRouteSignedOffset(tileX + 0.5, tileY + 0.5, projection);
  const sidePhase = signedOffset >= 0 ? 0.95 : -1.35;
  const wideWave = Math.sin(projection.progress * Math.PI * 8.2 + sidePhase) * 1.15;
  const smallWave = Math.sin(projection.progress * Math.PI * 23.5 + sidePhase * 1.8) * 0.42;
  const edgeNoise =
    mapEdgeNoise(tileX * 0.29, tileY * 0.31) * 0.32 +
    mapEdgeNoise(tileX * 0.61 + 4, tileY * 0.47 - 2) * 0.14;
  const edgeWidth = activeMap.routeHalfWidth + wideWave + smallWave + edgeNoise;

  if (projection.distance > edgeWidth) return true;
  if (isDenseMapWallFieldTile(tileX, tileY)) return true;

  return isSmallMapWallTile(projection, signedOffset, tileX, tileY);
}

function isSmallMapWallTile(projection, signedOffset, tileX, tileY) {
  if (projection.progress < 0.055) return false;

  for (const wall of getActiveMapDefinition().smallWalls) {
    const along = Math.abs(projection.progress - wall.progress) / wall.progressRadius;
    const across = Math.abs(signedOffset - wall.offset) / wall.offsetRadius;
    const roughEdge =
      mapEdgeNoise(tileX * 0.83 + wall.seed, tileY * 0.71 - wall.seed) * 0.18;

    if (along * along + across * across < 1 + roughEdge) {
      return true;
    }
  }

  return false;
}

function isDenseMapWallFieldTile(tileX, tileY) {
  const fields = getActiveMapDefinition().denseWalls || [];

  for (const field of fields) {
    const dx = tileX + 0.5 - field.x;
    const dy = tileY + 0.5 - field.y;
    if ((dx / field.radiusX) ** 2 + (dy / field.radiusY) ** 2 > 1) continue;

    const cellSize = field.cellSize || 2.5;
    const cellX = Math.floor((dx + field.radiusX) / cellSize);
    const cellY = Math.floor((dy + field.radiusY) / cellSize);
    const densityRoll = wallTextureHash(cellX + field.seed * 7.1, cellY - field.seed * 3.3, field.seed);
    if (densityRoll > (field.fill || 0.82)) continue;

    const jitterX = (wallTextureHash(cellX, cellY, field.seed + 11) - 0.5) * cellSize * 0.42;
    const jitterY = (wallTextureHash(cellX, cellY, field.seed + 17) - 0.5) * cellSize * 0.42;
    const centerX = (cellX + 0.5) * cellSize - field.radiusX + jitterX;
    const centerY = (cellY + 0.5) * cellSize - field.radiusY + jitterY;
    const radius =
      (field.wallRadiusMin || 0.5) +
      wallTextureHash(cellX, cellY, field.seed + 23) * ((field.wallRadiusMax || 0.88) - (field.wallRadiusMin || 0.5));

    if (Math.hypot(dx - centerX, dy - centerY) <= radius) {
      return true;
    }
  }

  return false;
}

function distortMapEdge(x0, y0, x1, y1, normalX, normalY) {
  const points = [{ x: x0, y: y0 }];
  const deltaX = x1 - x0;
  const deltaY = y1 - y0;
  const length = Math.hypot(deltaX, deltaY);
  const count = Math.max(1, Math.floor(length / MAP_EDGE_DISTORT_STEP));

  for (let index = 1; index < count; index++) {
    const ratio = index / count;
    const x = x0 + deltaX * ratio;
    const y = y0 + deltaY * ratio;
    const noise = mapEdgeNoise(x * 0.012, y * 0.012);
    const weight = noise > 0 ? 1 : 0.3;
    const offset = noise * MAP_EDGE_DISTORT_AMPLITUDE * weight;

    points.push({ x: x + normalX * offset, y: y + normalY * offset });
  }

  points.push({ x: x1, y: y1 });
  return points;
}

function appendPolygonEdge(polygon, points) {
  for (const point of points) {
    const previous = polygon[polygon.length - 1];
    if (previous && previous.x === point.x && previous.y === point.y) continue;
    polygon.push(point);
  }
}

function getMapTileEdge(tileX, tileY, side) {
  const tileSize = MAP_ART_SIZE / MAP_TILE_COLUMNS;
  const x = tileX * tileSize;
  const y = tileY * tileSize;

  if (side === "top") {
    return { x0: x, y0: y, x1: x + tileSize, y1: y, normalX: 0, normalY: -1 };
  }
  if (side === "right") {
    return { x0: x + tileSize, y0: y, x1: x + tileSize, y1: y + tileSize, normalX: 1, normalY: 0 };
  }
  if (side === "bottom") {
    return { x0: x + tileSize, y0: y + tileSize, x1: x, y1: y + tileSize, normalX: 0, normalY: 1 };
  }

  return { x0: x, y0: y + tileSize, x1: x, y1: y, normalX: -1, normalY: 0 };
}

function buildMapWallTilePolygon(tileX, tileY) {
  const polygon = [];
  const neighbors = {
    top: isMapWallTile(tileX, tileY - 1),
    right: isMapWallTile(tileX + 1, tileY),
    bottom: isMapWallTile(tileX, tileY + 1),
    left: isMapWallTile(tileX - 1, tileY),
  };

  for (const side of ["top", "right", "bottom", "left"]) {
    const edge = getMapTileEdge(tileX, tileY, side);
    const points = neighbors[side]
      ? [
          { x: edge.x0, y: edge.y0 },
          { x: edge.x1, y: edge.y1 },
        ]
      : distortMapEdge(edge.x0, edge.y0, edge.x1, edge.y1, edge.normalX, edge.normalY);
    appendPolygonEdge(polygon, points);
  }

  return polygon;
}

function drawMapWallShapes(
  targetCtx,
  {
    drawStroke = false,
    fillSeams = false,
    clipStrokeToFill = false,
    strokeStyle = targetCtx.strokeStyle,
    lineWidth = 2.4,
  } = {},
) {
  targetCtx.save();
  targetCtx.lineJoin = "miter";
  targetCtx.lineCap = "butt";
  const fillStyle = targetCtx.fillStyle;

  for (let tileY = 0; tileY < MAP_TILE_ROWS; tileY++) {
    for (let tileX = 0; tileX < MAP_TILE_COLUMNS; tileX++) {
      if (!isMapWallTile(tileX, tileY)) continue;

      const polygon = buildMapWallTilePolygon(tileX, tileY);
      targetCtx.beginPath();
      targetCtx.moveTo(polygon[0].x, polygon[0].y);
      for (let index = 1; index < polygon.length; index++) {
        targetCtx.lineTo(polygon[index].x, polygon[index].y);
      }
      targetCtx.closePath();
      targetCtx.fill();
      if (fillSeams) {
        targetCtx.strokeStyle = fillStyle;
        targetCtx.lineWidth = 0.7;
        targetCtx.stroke();
      }
    }
  }

  if (drawStroke) {
    targetCtx.save();
    if (clipStrokeToFill) targetCtx.globalCompositeOperation = "source-atop";
    drawMapWallBoundaries(targetCtx, strokeStyle, lineWidth);
    targetCtx.restore();
  }

  targetCtx.restore();
}

function drawMapWallBoundaries(targetCtx, strokeStyle, lineWidth) {
  targetCtx.strokeStyle = strokeStyle;
  targetCtx.lineWidth = lineWidth;

  for (let tileY = 0; tileY < MAP_TILE_ROWS; tileY++) {
    for (let tileX = 0; tileX < MAP_TILE_COLUMNS; tileX++) {
      if (!isMapWallTile(tileX, tileY)) continue;

      const neighbors = {
        top: isMapWallTile(tileX, tileY - 1),
        right: isMapWallTile(tileX + 1, tileY),
        bottom: isMapWallTile(tileX, tileY + 1),
        left: isMapWallTile(tileX - 1, tileY),
      };

      for (const side of ["top", "right", "bottom", "left"]) {
        if (neighbors[side]) continue;

        const edge = getMapTileEdge(tileX, tileY, side);
        const points = distortMapEdge(edge.x0, edge.y0, edge.x1, edge.y1, edge.normalX, edge.normalY);
        targetCtx.beginPath();
        targetCtx.moveTo(points[0].x, points[0].y);
        for (let index = 1; index < points.length; index++) {
          targetCtx.lineTo(points[index].x, points[index].y);
        }
        targetCtx.stroke();
      }
    }
  }
}

function artPointToScreen(point, mapLeft, mapTop, mapScreenWidth, mapScreenHeight) {
  return {
    x: mapLeft + (point.x / MAP_ART_SIZE) * mapScreenWidth,
    y: mapTop + (point.y / MAP_ART_SIZE) * mapScreenHeight,
  };
}

function wallTextureHash(x, y, seed) {
  const value = Math.sin(x * 12.9898 + y * 78.233 + seed * 37.719) * 43758.5453;
  return value - Math.floor(value);
}

function getWallHexCandidate(gridX, gridY) {
  const baseX = gridX * MAP_WALL_HEX_CELL + MAP_WALL_HEX_CELL * 0.5;
  const baseY = gridY * MAP_WALL_HEX_CELL + MAP_WALL_HEX_CELL * 0.5;

  return {
    gridX,
    gridY,
    x: baseX + (wallTextureHash(gridX, gridY, 1) - 0.5) * MAP_WALL_HEX_CELL * 0.6,
    y: baseY + (wallTextureHash(gridX, gridY, 2) - 0.5) * MAP_WALL_HEX_CELL * 0.6,
    radius:
      MAP_WALL_HEX_MIN_RADIUS +
      wallTextureHash(gridX, gridY, 3) * (MAP_WALL_HEX_MAX_RADIUS - MAP_WALL_HEX_MIN_RADIUS),
    rotate: wallTextureHash(gridX, gridY, 4) * Math.PI * 2,
  };
}

function hasEarlierWallHexPriority(a, b) {
  if (a.gridY !== b.gridY) return a.gridY < b.gridY;
  return a.gridX < b.gridX;
}

function isStableWallHexAccepted(candidate) {
  const neighborRange = Math.ceil(MAP_WALL_HEX_GLOBAL_MIN_DIST / MAP_WALL_HEX_CELL) + 2;

  for (let offsetY = -neighborRange; offsetY <= neighborRange; offsetY++) {
    for (let offsetX = -neighborRange; offsetX <= neighborRange; offsetX++) {
      if (offsetX === 0 && offsetY === 0) continue;

      const neighbor = getWallHexCandidate(candidate.gridX + offsetX, candidate.gridY + offsetY);
      if (!hasEarlierWallHexPriority(neighbor, candidate)) continue;
      if (Math.hypot(neighbor.x - candidate.x, neighbor.y - candidate.y) < MAP_WALL_HEX_GLOBAL_MIN_DIST) {
        return false;
      }
    }
  }

  return true;
}

function drawRoundHex(targetCtx, cx, cy, radius, rotate, roundFactor) {
  targetCtx.save();
  targetCtx.translate(cx, cy);
  targetCtx.rotate(rotate);
  targetCtx.beginPath();

  const sideCount = 6;
  const vertices = [];
  for (let index = 0; index < sideCount; index++) {
    const angle = (Math.PI * 2 * index) / sideCount;
    vertices.push({
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    });
  }

  const cornerRadius = radius * roundFactor;
  function roundCorner(p0, p, p1) {
    const dx0 = p0.x - p.x;
    const dy0 = p0.y - p.y;
    const dx1 = p1.x - p.x;
    const dy1 = p1.y - p.y;
    const len0 = Math.hypot(dx0, dy0) || 1;
    const len1 = Math.hypot(dx1, dy1) || 1;
    const pa = { x: p.x + dx0 * (cornerRadius / len0), y: p.y + dy0 * (cornerRadius / len0) };
    const pb = { x: p.x + dx1 * (cornerRadius / len1), y: p.y + dy1 * (cornerRadius / len1) };

    targetCtx.lineTo(pa.x, pa.y);
    targetCtx.quadraticCurveTo(p.x, p.y, pb.x, pb.y);
  }

  targetCtx.moveTo(
    vertices[0].x + ((vertices[1].x - vertices[0].x) * cornerRadius) / radius,
    vertices[0].y + ((vertices[1].y - vertices[0].y) * cornerRadius) / radius,
  );

  for (let index = 0; index < sideCount; index++) {
    roundCorner(vertices[index], vertices[(index + 1) % sideCount], vertices[(index + 2) % sideCount]);
  }

  targetCtx.closePath();
  targetCtx.fill();
  targetCtx.restore();
}

function traceVisibleWallPath(targetCtx, minTileX, minTileY, maxTileX, maxTileY, mapLeft, mapTop, mapScreenWidth, mapScreenHeight) {
  for (let tileY = minTileY; tileY <= maxTileY; tileY++) {
    for (let tileX = minTileX; tileX <= maxTileX; tileX++) {
      if (!isMapWallTile(tileX, tileY)) continue;

      const polygon = buildMapWallTilePolygon(tileX, tileY);
      const first = artPointToScreen(polygon[0], mapLeft, mapTop, mapScreenWidth, mapScreenHeight);
      targetCtx.moveTo(first.x, first.y);
      for (let index = 1; index < polygon.length; index++) {
        const point = artPointToScreen(polygon[index], mapLeft, mapTop, mapScreenWidth, mapScreenHeight);
        targetCtx.lineTo(point.x, point.y);
      }
      targetCtx.closePath();
    }
  }
}

function drawVisibleWallTexture(targetCtx, visibleWorldLeft, visibleWorldTop, visibleWorldRight, visibleWorldBottom, viewScale) {
  const startCellX = Math.floor(visibleWorldLeft / MAP_WALL_HEX_CELL) - 1;
  const endCellX = Math.ceil(visibleWorldRight / MAP_WALL_HEX_CELL) + 1;
  const startCellY = Math.floor(visibleWorldTop / MAP_WALL_HEX_CELL) - 1;
  const endCellY = Math.ceil(visibleWorldBottom / MAP_WALL_HEX_CELL) + 1;

  targetCtx.fillStyle = MAP_WALL_HEX_COLOR;

  for (let gridY = startCellY; gridY <= endCellY; gridY++) {
    for (let gridX = startCellX; gridX <= endCellX; gridX++) {
      const candidate = getWallHexCandidate(gridX, gridY);

      if (
        candidate.x < visibleWorldLeft ||
        candidate.y < visibleWorldTop ||
        candidate.x > visibleWorldRight ||
        candidate.y > visibleWorldBottom
      ) {
        continue;
      }
      if (!isStableWallHexAccepted(candidate)) continue;

      const screen = worldToScreen(candidate.x, candidate.y);
      drawRoundHex(targetCtx, screen.x, screen.y, candidate.radius * viewScale, candidate.rotate, MAP_WALL_HEX_ROUND);
    }
  }
}

function drawVisibleMapWallShapes(
  targetCtx,
  mapLeft,
  mapTop,
  mapScreenWidth,
  mapScreenHeight,
  visibleWorldLeft,
  visibleWorldTop,
  visibleWorldRight,
  visibleWorldBottom,
) {
  const topLeft = worldToRouteTilePoint(visibleWorldLeft, visibleWorldTop);
  const bottomRight = worldToRouteTilePoint(visibleWorldRight, visibleWorldBottom);
  const minTileX = clamp(Math.floor(topLeft.x) - 2, 0, MAP_TILE_COLUMNS - 1);
  const minTileY = clamp(Math.floor(topLeft.y) - 2, 0, MAP_TILE_ROWS - 1);
  const maxTileX = clamp(Math.ceil(bottomRight.x) + 2, 0, MAP_TILE_COLUMNS - 1);
  const maxTileY = clamp(Math.ceil(bottomRight.y) + 2, 0, MAP_TILE_ROWS - 1);

  targetCtx.save();
  targetCtx.lineJoin = "miter";
  targetCtx.lineCap = "butt";
  targetCtx.fillStyle = MAP_WALL_COLOR;

  for (let tileY = minTileY; tileY <= maxTileY; tileY++) {
    for (let tileX = minTileX; tileX <= maxTileX; tileX++) {
      if (!isMapWallTile(tileX, tileY)) continue;

      const polygon = buildMapWallTilePolygon(tileX, tileY);
      const first = artPointToScreen(polygon[0], mapLeft, mapTop, mapScreenWidth, mapScreenHeight);
      targetCtx.beginPath();
      targetCtx.moveTo(first.x, first.y);
      for (let index = 1; index < polygon.length; index++) {
        const point = artPointToScreen(polygon[index], mapLeft, mapTop, mapScreenWidth, mapScreenHeight);
        targetCtx.lineTo(point.x, point.y);
      }
      targetCtx.closePath();
      targetCtx.fill();
    }
  }

  targetCtx.save();
  targetCtx.beginPath();
  traceVisibleWallPath(
    targetCtx,
    minTileX,
    minTileY,
    maxTileX,
    maxTileY,
    mapLeft,
    mapTop,
    mapScreenWidth,
    mapScreenHeight,
  );
  targetCtx.clip();
  drawVisibleWallTexture(
    targetCtx,
    visibleWorldLeft,
    visibleWorldTop,
    visibleWorldRight,
    visibleWorldBottom,
    getViewScale(),
  );
  targetCtx.restore();

  targetCtx.strokeStyle = MAP_WALL_STROKE_COLOR;
  targetCtx.lineWidth = Math.max(1.2, 2.2 * getViewScale());

  for (let tileY = minTileY; tileY <= maxTileY; tileY++) {
    for (let tileX = minTileX; tileX <= maxTileX; tileX++) {
      if (!isMapWallTile(tileX, tileY)) continue;

      const neighbors = {
        top: isMapWallTile(tileX, tileY - 1),
        right: isMapWallTile(tileX + 1, tileY),
        bottom: isMapWallTile(tileX, tileY + 1),
        left: isMapWallTile(tileX - 1, tileY),
      };

      for (const side of ["top", "right", "bottom", "left"]) {
        if (neighbors[side]) continue;

        const edge = getMapTileEdge(tileX, tileY, side);
        const points = distortMapEdge(edge.x0, edge.y0, edge.x1, edge.y1, edge.normalX, edge.normalY);
        const first = artPointToScreen(points[0], mapLeft, mapTop, mapScreenWidth, mapScreenHeight);
        targetCtx.beginPath();
        targetCtx.moveTo(first.x, first.y);
        for (let index = 1; index < points.length; index++) {
          const point = artPointToScreen(points[index], mapLeft, mapTop, mapScreenWidth, mapScreenHeight);
          targetCtx.lineTo(point.x, point.y);
        }
        targetCtx.stroke();
      }
    }
  }

  targetCtx.restore();
}

function findMapWallBounds(data, width, height) {
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = (y * width + x) * 4;
      const red = data[index];
      const green = data[index + 1];
      const blue = data[index + 2];
      const alpha = data[index + 3];
      const luma = red * 0.2126 + green * 0.7152 + blue * 0.0722;

      if (alpha > 16 && luma < MAP_WALL_LUMA_THRESHOLD) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  return { minX, minY, maxX, maxY };
}

function sortInventory() {
  state.inventory.sort((a, b) => b.tierIndex - a.tierIndex || a.name.localeCompare(b.name));
}

function getItemStackKey(item) {
  const source = isLeaderboardRewardPetal(item) ? "leaderboard" : "owned";
  return `${item.asset}:${item.name}:${item.tierIndex}:${source}`;
}

function getInventoryStackEntries() {
  const stacks = [];
  const stackByKey = new Map();

  state.inventory.forEach((item, index) => {
    const stackKey = getItemStackKey(item);
    const existing = stackByKey.get(stackKey);

    if (existing) {
      existing.quantity += 1;
      existing.indexes.push(index);
      return;
    }

    const entry = { item, index, indexes: [index], quantity: 1, stackKey };
    stackByKey.set(stackKey, entry);
    stacks.push(entry);
  });

  return stacks.sort((a, b) => b.item.tierIndex - a.item.tierIndex || a.item.name.localeCompare(b.item.name));
}

function getInventoryStackEntry(stackKey) {
  return getInventoryStackEntries().find((entry) => entry.stackKey === stackKey) || null;
}

function isCraftableStack(entry) {
  if (entry.item.name === "ThunderHammer") return false;
  return entry.quantity >= CRAFT_ITEMS_PER_ATTEMPT && entry.item.tierIndex < TIERS.length - 1;
}

function isForgeableStack(entry) {
  return (
    entry.item.name === "Stinger" &&
    entry.item.tierIndex >= THUNDER_HAMMER_MIN_TIER_NUMBER - 1 &&
    entry.quantity >= FORGE_ITEMS_PER_ATTEMPT
  );
}

function getCraftChance(tierIndex) {
  const chance = CRAFT_CHANCES[tierIndex] ?? 0;
  return Math.min(0.95, chance * getCraftChanceMultiplier());
}

function formatChancePercent(chance) {
  const percent = chance * 100;
  if (percent >= 10) return `${Math.round(percent)}%`;
  if (percent >= 1) return `${Math.round(percent * 10) / 10}%`;
  return `${Math.round(percent * 100) / 100}%`;
}

function darkenHexColor(hexColor, amount = 0.34) {
  const normalized = `${hexColor || ""}`.replace("#", "");
  if (!/^[\da-f]{6}$/i.test(normalized)) return "#111217";

  const red = parseInt(normalized.slice(0, 2), 16);
  const green = parseInt(normalized.slice(2, 4), 16);
  const blue = parseInt(normalized.slice(4, 6), 16);
  const scale = 1 - amount;
  const toHex = (value) => Math.max(0, Math.min(255, Math.round(value * scale)))
    .toString(16)
    .padStart(2, "0");

  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}

function getPetalDisplayName(item) {
  const definition = PETAL_DEFINITIONS[item?.name];
  const text = getCurrentText();
  return definition?.labelKey ? text[definition.labelKey] || item.name : item?.name || "";
}

function formatPetalStat(value) {
  if (!Number.isFinite(value)) return "0";
  return Number.isInteger(value) ? `${value}` : `${Math.round(value * 10) / 10}`;
}

function formatSeconds(milliseconds) {
  return `${formatPetalStat(milliseconds / 1000)}s`;
}

function formatMonsterSize(width, height) {
  return `${formatPetalStat(width)}x${formatPetalStat(height)}`;
}

function createPetalPreviewItem(name, tierIndex) {
  const definition = PETAL_DEFINITIONS[name] || PETAL_DEFINITIONS.Basic;
  const tier = getTier(Math.max(tierIndex, (definition.minTierNumber || 1) - 1));
  const maxDurability = getPetalBaseMaxDurability(name, tier.index);

  return {
    name,
    asset: definition.asset,
    tierIndex: tier.index,
    tier: tier.name,
    tierColor: tier.color,
    maxDurability,
    durability: maxDurability,
    baseRespawnMs: definition.baseRespawnMs,
    durabilityCost: definition.durabilityCost,
    healAmount: definition.baseHeal ? scaleStatByTier(definition.baseHeal, 2.2, tier.index) : 0,
    attack: getPetalAttack(name, tier.index),
    active: true,
    readyAt: 0,
  };
}

function createMonsterTooltipDrop(name, tierIndex, count) {
  const item = createPetalPreviewItem(name, tierIndex);
  const drop = document.createElement("div");
  drop.className = "monster-tooltip-drop";
  drop.style.setProperty("--drop-color", item.tierColor);
  drop.style.setProperty("--drop-border-color", darkenHexColor(item.tierColor));

  const image = document.createElement("img");
  image.src = ASSETS[item.asset];
  image.alt = "";

  const label = document.createElement("span");
  label.textContent = `${item.tier} ${getPetalDisplayName(item)} x${count}`;

  drop.append(image, label);
  return drop;
}

function getMonsterDisplayName(speciesName) {
  const definition = MONSTER_DEFINITIONS[speciesName] || MONSTER_DEFINITIONS.Bee;
  const text = getCurrentText();
  return text[definition.labelKey] || speciesName;
}

function getMonsterSpeciesSpawnChance(speciesName, tierIndex) {
  const tierNumber = getTier(tierIndex).index + 1;
  const rockChance = 0.16;
  const ladybugChance = tierNumber >= 4 ? 0.52 : 0.42;
  const movingMonsterShare = 1 - rockChance;

  if (speciesName === "Rock") return rockChance;
  if (speciesName === "Ladybug") return movingMonsterShare * ladybugChance;
  return movingMonsterShare * (1 - ladybugChance);
}

function getMonsterSpeciesTargetCounts(tierIndex) {
  const totalTarget = getMonsterTierTargetCounts()[tierIndex] || 0;
  const weightedCounts = MONSTER_SPECIES.map((speciesName) => {
    const exact = totalTarget * getMonsterSpeciesSpawnChance(speciesName, tierIndex);
    return {
      speciesName,
      count: Math.floor(exact),
      remainder: exact - Math.floor(exact),
    };
  });
  let assigned = weightedCounts.reduce((total, entry) => total + entry.count, 0);

  weightedCounts
    .sort((a, b) => b.remainder - a.remainder)
    .forEach((entry) => {
      if (assigned >= totalTarget) return;
      entry.count += 1;
      assigned += 1;
    });

  return Object.fromEntries(weightedCounts.map((entry) => [entry.speciesName, entry.count]));
}

function getMonsterSpeciesTargetCount(speciesName, tierIndex) {
  return getMonsterSpeciesTargetCounts(tierIndex)[speciesName] || 0;
}

function getMonsterDexEntry(speciesName, tierIndex) {
  const definition = MONSTER_DEFINITIONS[speciesName] || MONSTER_DEFINITIONS.Bee;
  const stats = definition.stats;
  const tier = getTier(tierIndex);
  const sizeScale = scaleSizeByTier(1, tier.index);
  const dropTierIndex = Math.max(0, tier.index - 1);

  return {
    speciesName,
    label: getMonsterDisplayName(speciesName),
    asset: definition.asset,
    drops: definition.drops || [],
    tier,
    maxHealth: scaleStatByTier(stats.maxHealth, 4.5, tier.index),
    attack: scaleStatByTier(stats.attack, MONSTER_ATTACK_TIER_MULTIPLIER, tier.index),
    experienceReward: getMonsterExperienceReward(tier.index),
    amount: getMonsterSpeciesTargetCount(speciesName, tier.index),
    width: stats.width * sizeScale,
    height: stats.height * sizeScale,
    dropTierIndex,
    dropTier: getTier(dropTierIndex),
    dropCount: getMonsterDropCount(tier.index),
  };
}

function showMonsterDexTooltip(entry, event) {
  const text = getCurrentText();

  itemTooltip.innerHTML = "";
  itemTooltip.className = "item-tooltip monster-tooltip";
  itemTooltip.style.setProperty("--tier-color", entry.tier.color);
  itemTooltip.style.setProperty("--tier-border-color", darkenHexColor(entry.tier.color));

  const header = document.createElement("div");
  header.className = "item-tooltip-head";

  const image = document.createElement("img");
  image.src = ASSETS[entry.asset] || ASSETS.bee;
  image.alt = "";

  const titleWrap = document.createElement("div");
  const title = document.createElement("div");
  title.className = "item-tooltip-title";
  title.textContent = `${entry.tier.name} ${entry.label}`;
  const subtitle = document.createElement("div");
  subtitle.className = "item-tooltip-subtitle";
  subtitle.textContent = `${text.monsterDropTier}: ${entry.dropTier.name}`;
  titleWrap.append(title, subtitle);
  header.append(image, titleWrap);

  const rows = document.createElement("div");
  rows.className = "item-tooltip-rows";
  rows.append(
    createTooltipRow(text.monsterHealth, formatPetalStat(entry.maxHealth)),
    createTooltipRow(text.monsterDamage, formatPetalStat(entry.attack)),
    createTooltipRow(text.monsterExperience, formatPetalStat(entry.experienceReward)),
    createTooltipRow(text.monsterAmount, formatPetalStat(entry.amount)),
    createTooltipRow(text.monsterSize, formatMonsterSize(entry.width, entry.height)),
  );

  const dropsLabel = document.createElement("div");
  dropsLabel.className = "monster-tooltip-drop-label";
  dropsLabel.textContent = text.monsterDrops;

  const drops = document.createElement("div");
  drops.className = "monster-tooltip-drops";
  if (entry.drops.length) {
    drops.append(
      ...entry.drops.map((dropName) =>
        createMonsterTooltipDrop(dropName, entry.dropTierIndex, entry.dropCount),
      ),
    );
  } else {
    const emptyDrop = document.createElement("div");
    emptyDrop.className = "monster-tooltip-drop";
    emptyDrop.textContent = text.monsterNoDrops;
    drops.append(emptyDrop);
  }

  itemTooltip.append(header, rows, dropsLabel, drops);
  itemTooltip.classList.remove("is-hidden");
  positionItemTooltip(event);
}

function renderMonsterDexUi() {
  if (!monsterDexList) return;

  const text = getCurrentText();
  monsterDexList.innerHTML = "";

  for (const speciesKey of MONSTER_SPECIES) {
    const definition = MONSTER_DEFINITIONS[speciesKey];
    const row = document.createElement("article");
    row.className = "monsterdex-species-row";

    const speciesInfo = document.createElement("div");
    speciesInfo.className = "monsterdex-species-info";

    const speciesArt = document.createElement("div");
    speciesArt.className = "monsterdex-species-art";

    const speciesImage = document.createElement("img");
    speciesImage.src = ASSETS[definition.asset] || ASSETS.bee;
    speciesImage.alt = "";
    speciesArt.append(speciesImage);

    const speciesName = document.createElement("div");
    speciesName.className = "monsterdex-species-name";
    speciesName.textContent = getMonsterDisplayName(speciesKey);
    speciesInfo.append(speciesArt, speciesName);

    const tierGrid = document.createElement("div");
    tierGrid.className = "monsterdex-tier-grid";

    for (let tierIndex = 0; tierIndex < TIERS.length; tierIndex++) {
      const entry = getMonsterDexEntry(speciesKey, tierIndex);
      const tierCell = document.createElement("button");
      tierCell.className = "monsterdex-tier-cell";
      tierCell.type = "button";
      tierCell.style.setProperty("--tier-color", entry.tier.color);
      tierCell.style.setProperty("--tier-border-color", darkenHexColor(entry.tier.color));
      tierCell.title = `${entry.tier.name} ${entry.label}`;

      const image = document.createElement("img");
      image.src = ASSETS[entry.asset] || ASSETS.bee;
      image.alt = "";
      const label = document.createElement("span");
      label.textContent = entry.tier.name;

      tierCell.append(image, label);
      tierCell.addEventListener("pointerenter", (event) => showMonsterDexTooltip(entry, event));
      tierCell.addEventListener("pointermove", (event) => showMonsterDexTooltip(entry, event));
      tierCell.addEventListener("pointerleave", hideItemTooltip);
      tierCell.addEventListener("pointercancel", hideItemTooltip);
      tierGrid.append(tierCell);
    }

    row.append(speciesInfo, tierGrid);
    monsterDexList.append(row);
  }
}

function getPetalDexEntry(petalName, tierIndex) {
  const item = createPetalPreviewItem(petalName, tierIndex);
  const definition = PETAL_DEFINITIONS[item.name] || {};

  return {
    ...item,
    label: getPetalDisplayName(item),
    cooldown: item.baseRespawnMs,
    orbCount: item.name === "Light" ? getLightOrbCount(item.tierIndex) : 1,
    homingRange: definition.homingRange ? scaleStatByTier(definition.homingRange, 1.18, item.tierIndex) : 0,
  };
}

function showPetalDexTooltip(entry, event) {
  const text = getCurrentText();

  itemTooltip.innerHTML = "";
  itemTooltip.className = "item-tooltip monster-tooltip";

  const header = document.createElement("div");
  header.className = "item-tooltip-head";
  const image = document.createElement("img");
  image.src = ASSETS[entry.asset] || ASSETS.basic;
  image.alt = "";
  const titleWrap = document.createElement("div");
  const title = document.createElement("div");
  title.className = "item-tooltip-title";
  title.textContent = `${entry.tier} ${entry.label}`;
  const subtitle = document.createElement("div");
  subtitle.className = "item-tooltip-subtitle";
  subtitle.textContent = text.petalType;
  titleWrap.append(title, subtitle);
  header.append(image, titleWrap);

  const rows = document.createElement("div");
  rows.className = "item-tooltip-rows";
  const tooltipRows = [
    createTooltipRow(text.petalName, entry.label),
    createTooltipRow(text.petalTier, entry.tier),
    createTooltipRow(text.petalDamage, formatPetalStat(entry.attack)),
    createTooltipRow(text.petalDurability, formatPetalStat(entry.maxDurability)),
    createTooltipRow(text.petalCooldown, formatSeconds(entry.cooldown)),
    createTooltipRow(text.petalDurabilityCost, formatPetalStat(entry.durabilityCost || 10)),
  ];
  if (entry.healAmount) tooltipRows.push(createTooltipRow(text.petalHeal, formatPetalStat(entry.healAmount)));
  if (entry.homingRange) tooltipRows.push(createTooltipRow(text.petalHomingRange, formatPetalStat(entry.homingRange)));
  if (entry.name === "Light") tooltipRows.push(createTooltipRow("Light", `${entry.orbCount}`));
  rows.append(...tooltipRows);

  itemTooltip.append(header, rows);
  itemTooltip.classList.remove("is-hidden");
  positionItemTooltip(event);
}

function renderPetalDexUi() {
  if (!petalDexList) return;

  petalDexList.innerHTML = "";

  for (const petalName of Object.keys(PETAL_DEFINITIONS)) {
    const definition = PETAL_DEFINITIONS[petalName] || PETAL_DEFINITIONS.Basic;
    const minTierIndex = Math.max(0, (definition.minTierNumber || 1) - 1);
    const baseEntry = getPetalDexEntry(petalName, minTierIndex);
    const row = document.createElement("article");
    row.className = "monsterdex-species-row";

    const petalInfo = document.createElement("div");
    petalInfo.className = "monsterdex-species-info";

    const petalArt = document.createElement("div");
    petalArt.className = "monsterdex-species-art";
    const petalImage = document.createElement("img");
    petalImage.src = ASSETS[baseEntry.asset] || ASSETS.basic;
    petalImage.alt = "";
    petalArt.append(petalImage);

    const petalLabel = document.createElement("div");
    petalLabel.className = "monsterdex-species-name";
    petalLabel.textContent = baseEntry.label;
    petalInfo.append(petalArt, petalLabel);

    const tierGrid = document.createElement("div");
    tierGrid.className = "monsterdex-tier-grid";

    for (let tierIndex = minTierIndex; tierIndex < TIERS.length; tierIndex++) {
      const entry = getPetalDexEntry(petalName, tierIndex);
      const tierCell = document.createElement("button");
      tierCell.className = "monsterdex-tier-cell";
      tierCell.type = "button";
      tierCell.style.setProperty("--tier-color", entry.tierColor);
      tierCell.style.setProperty("--tier-border-color", darkenHexColor(entry.tierColor));
      tierCell.title = `${entry.tier} ${entry.label}`;

      const image = document.createElement("img");
      image.src = ASSETS[entry.asset] || ASSETS.basic;
      image.alt = "";
      const label = document.createElement("span");
      label.textContent = entry.tier;

      tierCell.append(image, label);
      tierCell.addEventListener("pointerenter", (event) => showPetalDexTooltip(entry, event));
      tierCell.addEventListener("pointermove", (event) => showPetalDexTooltip(entry, event));
      tierCell.addEventListener("pointerleave", hideItemTooltip);
      tierCell.addEventListener("pointercancel", hideItemTooltip);
      tierGrid.append(tierCell);
    }

    row.append(petalInfo, tierGrid);
    petalDexList.append(row);
  }
}

function hideItemTooltip() {
  itemTooltip.classList.add("is-hidden");
}

function positionItemTooltip(event) {
  const margin = 12;
  const offset = 16;
  const rect = itemTooltip.getBoundingClientRect();
  let x = event.clientX + offset;
  let y = event.clientY - rect.height - offset;

  if (x + rect.width > window.innerWidth - margin) {
    x = event.clientX - rect.width - offset;
  }
  if (y < margin) {
    y = event.clientY + offset;
  }

  itemTooltip.style.left = `${clamp(x, margin, window.innerWidth - rect.width - margin)}px`;
  itemTooltip.style.top = `${clamp(y, margin, window.innerHeight - rect.height - margin)}px`;
}

function createTooltipRow(label, value) {
  const row = document.createElement("div");
  row.className = "item-tooltip-row";

  const labelElement = document.createElement("span");
  labelElement.textContent = label;

  const valueElement = document.createElement("b");
  valueElement.textContent = value;

  row.append(labelElement, valueElement);
  return row;
}

function showEquipmentTooltip(item, event) {
  if (!item) {
    hideItemTooltip();
    return;
  }

  const text = getCurrentText();
  if (item.name === "Light") ensureLightOrbStates(item);
  const currentDurability =
    item.name === "Light"
      ? item.orbs.reduce((total, orb) => total + Math.max(0, orb.durability || 0), 0)
      : Math.max(0, item.durability || 0);
  const maxDurability =
    item.name === "Light" ? item.maxDurability * item.orbs.length : item.maxDurability;
  const remainingCooldown = item.active ? 0 : Math.max(0, (item.readyAt || 0) - state.lastTime);
  const statusText = item.placed
    ? text.petalPlaced
    : item.active
      ? text.petalReady
      : `${text.petalRecharging} ${formatSeconds(remainingCooldown)}`;

  itemTooltip.innerHTML = "";
  itemTooltip.className = "item-tooltip";
  itemTooltip.style.setProperty("--tier-color", item.tierColor);
  itemTooltip.style.setProperty("--tier-border-color", darkenHexColor(item.tierColor));

  const header = document.createElement("div");
  header.className = "item-tooltip-head";

  const image = document.createElement("img");
  image.src = ASSETS[item.asset];
  image.alt = "";

  const titleWrap = document.createElement("div");
  const title = document.createElement("div");
  title.className = "item-tooltip-title";
  title.textContent = `${item.tier} ${getPetalDisplayName(item)}`;
  const subtitle = document.createElement("div");
  subtitle.className = "item-tooltip-subtitle";
  subtitle.textContent = text.petalType;
  titleWrap.append(title, subtitle);
  header.append(image, titleWrap);

  const rows = document.createElement("div");
  rows.className = "item-tooltip-rows";
  const tooltipRows = [
    createTooltipRow(text.petalName, getPetalDisplayName(item)),
    createTooltipRow(text.petalTier, item.tier),
    createTooltipRow(text.petalDamage, formatPetalStat(item.attack)),
    createTooltipRow(
      text.petalDurability,
      `${formatPetalStat(currentDurability)} / ${formatPetalStat(maxDurability)}`,
    ),
    createTooltipRow(text.petalCooldown, formatSeconds(getPetalCooldownMs(item))),
  ];
  if (item.healAmount) tooltipRows.push(createTooltipRow(text.petalHeal, formatPetalStat(item.healAmount)));
  const itemDefinition = PETAL_DEFINITIONS[item.name] || {};
  if (itemDefinition.homingRange) {
    tooltipRows.push(
      createTooltipRow(
        text.petalHomingRange,
        formatPetalStat(scaleStatByTier(itemDefinition.homingRange, 1.18, item.tierIndex)),
      ),
    );
  }
  if (item.name === "Light") {
    tooltipRows.push(createTooltipRow("Light", `${getLightOrbCount(item.tierIndex)}`));
  }
  tooltipRows.push(
    createTooltipRow(text.petalDurabilityCost, formatPetalStat(item.durabilityCost || 10)),
    createTooltipRow(text.petalStatus, statusText),
  );
  rows.append(...tooltipRows);

  itemTooltip.append(header, rows);
  itemTooltip.classList.remove("is-hidden");
  positionItemTooltip(event);
}

function setItemSlotWearState(slot, item) {
  if (item?.name === "Light") {
    ensureLightOrbStates(item);
    const totalRatio =
      item.orbs.reduce(
        (total, orb) => total + clamp((orb.durability || 0) / Math.max(1, item.maxDurability), 0, 1),
        0,
      ) / Math.max(1, item.orbs.length);
    const rechargeProgress =
      item.orbs.reduce((total, orb, index) => total + getPetalUnitRechargeProgress(item, index), 0) /
      Math.max(1, item.orbs.length);

    slot.classList.toggle("is-recharging", item.orbs.some((orb) => !orb.active));
    slot.style.setProperty("--wear-ratio", `${1 - totalRatio}`);
    slot.style.setProperty("--recharge-angle", `${Math.round(rechargeProgress * 360)}deg`);
    return;
  }

  slot.classList.toggle("is-recharging", Boolean(item && !item.active));

  if (!item) {
    slot.style.setProperty("--wear-ratio", "0");
    return;
  }

  const durabilityRatio = item.maxDurability
    ? clamp((item.durability || 0) / item.maxDurability, 0, 1)
    : 1;
  const wearRatio = item.active ? 1 - durabilityRatio : 1;
  slot.style.setProperty("--wear-ratio", `${wearRatio}`);
  slot.style.setProperty("--recharge-angle", `${Math.round(getPetalRechargeProgress(item) * 360)}deg`);
}

function renderItemContent(slot, item, quantity = 1) {
  slot.innerHTML = "";
  slot.classList.toggle("is-empty", !item);
  slot.classList.toggle("is-light-stack", item?.name === "Light");
  slot.draggable = Boolean(item);
  slot.style.setProperty("--tier-color", item ? item.tierColor : "#24743f");
  slot.style.setProperty("--tier-border-color", item ? darkenHexColor(item.tierColor) : "#18522c");
  setItemSlotWearState(slot, item);

  if (!item) return;

  const image = document.createElement("img");
  image.src = ASSETS[item.asset];
  image.alt = "";

  let visual = image;
  if (item.name === "Light") {
    const orbCount = getLightOrbCount(item.tierIndex);
    const stack = document.createElement("div");
    stack.className = "light-orb-stack";
    const previewCount = Math.min(orbCount, 14);
    for (let index = 0; index < previewCount; index++) {
      const orb = document.createElement("img");
      const angle = (index / previewCount) * Math.PI * 2;
      const radius = previewCount <= 2 ? 7 : 10;
      orb.src = ASSETS[item.asset];
      orb.alt = "";
      orb.style.setProperty("--orb-x", `${Math.cos(angle) * radius}px`);
      orb.style.setProperty("--orb-y", `${Math.sin(angle) * radius}px`);
      stack.append(orb);
    }
    visual = stack;
  }

  const label = document.createElement("span");
  label.textContent = getPetalDisplayName(item);

  const tierLabel = document.createElement("span");
  tierLabel.className = "item-tier";
  tierLabel.textContent = item.tier;

  const wearOverlay = document.createElement("i");
  wearOverlay.className = "item-wear-overlay";
  wearOverlay.setAttribute("aria-hidden", "true");

  slot.append(visual, label, tierLabel, wearOverlay);
  if (quantity > 1) {
    const quantityLabel = document.createElement("b");
    quantityLabel.className = "item-quantity";
    quantityLabel.textContent = quantity > 999 ? "999+" : `${quantity}`;
    slot.append(quantityLabel);
  }
  slot.setAttribute("aria-label", `${item.tier} ${getPetalDisplayName(item)}`);
}

function syncEquipmentSlotWearUi() {
  const slotCount = getEffectiveEquipmentSlots();
  equipmentSlots.forEach((slot, index) => {
    if (index >= slotCount) return;
    setItemSlotWearState(slot, state.weapon.petals[index]);
  });
  secondaryEquipmentSlots.forEach((slot, index) => {
    if (index >= slotCount) return;
    setItemSlotWearState(slot, state.weapon.secondaryPetals[index]);
  });
}

function isEquipmentSource(source) {
  return source === "equipment" || source === "secondary";
}

function getEquipmentArray(source) {
  return source === "secondary" ? state.weapon.secondaryPetals : state.weapon.petals;
}

function movePetalToInventory(item) {
  if (!item) return;

  item.active = true;
  item.readyAt = 0;
  resetPetalPlacement(item);
  state.inventory.push(item);
  sortInventory();
}

function startItemDrag(source, index, event) {
  const item = isEquipmentSource(source) ? getEquipmentArray(source)[index] : state.inventory[index];
  if (!item) {
    event.preventDefault();
    return;
  }

  state.uiLockMovement = true;
  hideItemTooltip();
  dragData = { source, index };
  dragDropCompleted = false;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", `${source}:${index}`);
  event.currentTarget.classList.add("is-dragging");
}

function moveEquipmentToInventory(index) {
  const item = state.weapon.petals[index];
  if (!item) return;

  state.weapon.petals[index] = null;
  movePetalToInventory(item);
}

function moveSecondaryEquipmentToInventory(index) {
  const item = state.weapon.secondaryPetals[index];
  if (!item) return;

  state.weapon.secondaryPetals[index] = null;
  movePetalToInventory(item);
}

function dropDraggedItemToInventory() {
  if (!dragData) return;

  if (dragData.source === "equipment") {
    moveEquipmentToInventory(dragData.index);
  } else if (dragData.source === "secondary") {
    moveSecondaryEquipmentToInventory(dragData.index);
  } else {
    sortInventory();
  }

  dragDropCompleted = true;
  renderItemUi();
}

function dropDraggedItemToEquipment(targetIndex, targetSource = "equipment") {
  if (!dragData) return;
  if (targetIndex >= getEffectiveEquipmentSlots()) return;

  const targetArray = getEquipmentArray(targetSource);

  if (isEquipmentSource(dragData.source)) {
    const sourceIndex = dragData.index;
    const sourceArray = getEquipmentArray(dragData.source);
    const sourceItem = sourceArray[sourceIndex];
    sourceArray[sourceIndex] = targetArray[targetIndex];
    targetArray[targetIndex] = sourceItem;
  } else {
    const sourceItem = state.inventory.splice(dragData.index, 1)[0];
    const replacedItem = targetArray[targetIndex];
    targetArray[targetIndex] = sourceItem;
    if (replacedItem) state.inventory.push(replacedItem);
    sortInventory();
  }

  dragDropCompleted = true;
  renderItemUi();
}

function finishItemDrag(event) {
  event.currentTarget.classList.remove("is-dragging");
  if (dragData?.source === "equipment" && !dragDropCompleted) {
    moveEquipmentToInventory(dragData.index);
    renderItemUi();
  } else if (dragData?.source === "secondary" && !dragDropCompleted) {
    moveSecondaryEquipmentToInventory(dragData.index);
    renderItemUi();
  }
  state.uiLockMovement = false;
  dragData = null;
  dragDropCompleted = false;
}

function findFirstEmptyEquipmentSlot(source = "equipment") {
  const slots = getEquipmentArray(source);
  const slotCount = getEffectiveEquipmentSlots();
  for (let index = 0; index < slotCount; index++) {
    if (!slots[index]) return index;
  }
  return -1;
}

function equipInventoryItem(index) {
  const item = state.inventory[index];
  if (!item) return;

  let targetSource = "equipment";
  let targetIndex = findFirstEmptyEquipmentSlot("equipment");
  if (targetIndex < 0) {
    targetSource = "secondary";
    targetIndex = findFirstEmptyEquipmentSlot("secondary");
  }
  if (targetIndex < 0) return;

  state.inventory.splice(index, 1);
  getEquipmentArray(targetSource)[targetIndex] = item;
  renderItemUi();
}

function swapEquipmentSlot(index) {
  if (index >= getEffectiveEquipmentSlots()) return;

  const mainItem = state.weapon.petals[index];
  state.weapon.petals[index] = state.weapon.secondaryPetals[index];
  state.weapon.secondaryPetals[index] = mainItem;
  renderItemUi();
}

function swapAllEquipmentSlots() {
  const slotCount = getEffectiveEquipmentSlots();
  for (let index = 0; index < slotCount; index++) {
    const mainItem = state.weapon.petals[index];
    state.weapon.petals[index] = state.weapon.secondaryPetals[index];
    state.weapon.secondaryPetals[index] = mainItem;
  }
  renderItemUi();
}

function renderEquipmentSlots(slots, source) {
  const slotCount = getEffectiveEquipmentSlots();
  const equippedItems = getEquipmentArray(source);

  slots.forEach((slot, index) => {
    const isLocked = index >= slotCount;
    const equippedPetal = equippedItems[index];
    slot.classList.toggle("is-locked", isLocked);
    renderItemContent(slot, equippedPetal);
    slot.dataset.equipmentIndex = `${index}`;
    slot.dataset.equipmentSource = source;
    slot.onpointerenter = null;
    slot.onpointermove = null;
    slot.onpointerleave = null;
    slot.onpointercancel = null;
    slot.onclick = null;
    if (isLocked) {
      slot.ondragstart = null;
      slot.ondragend = null;
      slot.ondragover = null;
      slot.ondrop = null;
      return;
    }
    slot.ondragstart = (event) => startItemDrag(source, index, event);
    slot.ondragend = finishItemDrag;
    slot.ondragover = (event) => event.preventDefault();
    slot.ondrop = (event) => {
      event.preventDefault();
      dropDraggedItemToEquipment(index, source);
    };
    slot.onclick = () => swapEquipmentSlot(index);
    if (equippedPetal) {
      slot.onpointerenter = (event) => showEquipmentTooltip(equippedPetal, event);
      slot.onpointermove = (event) => showEquipmentTooltip(equippedPetal, event);
      slot.onpointerleave = hideItemTooltip;
      slot.onpointercancel = hideItemTooltip;
    }
  });
}

function renderItemUi() {
  sortInventory();
  const slotCount = getEffectiveEquipmentSlots();
  primaryHotbar.style.setProperty("--slot-count", slotCount);
  secondaryHotbar.style.setProperty("--slot-count", slotCount);

  renderEquipmentSlots(equipmentSlots, "equipment");
  renderEquipmentSlots(secondaryEquipmentSlots, "secondary");

  inventoryGrid.innerHTML = "";
  const entries = getInventoryStackEntries();
  entries.forEach(({ item, index, quantity }) => {
    const slot = document.createElement("div");
    slot.className = "item-slot";
    renderItemContent(slot, item, quantity);
    slot.dataset.inventoryIndex = `${index}`;
    slot.ondragstart = (event) => startItemDrag("inventory", index, event);
    slot.ondragend = finishItemDrag;
    slot.onclick = () => equipInventoryItem(index);
    inventoryGrid.append(slot);
  });

  const visibleCells = Math.max(45, Math.ceil(entries.length / 5) * 5);
  for (let index = entries.length; index < visibleCells; index++) {
    const slot = document.createElement("div");
    slot.className = "inventory-empty-slot";
    inventoryGrid.append(slot);
  }

  renderCraftingUi();
  renderForgingUi();
  saveActiveAccount();
}

function renderCraftingUi() {
  if (!craftList) return;

  const text = getCurrentText();
  const entries = getInventoryStackEntries().filter(isCraftableStack);
  const selectedEntry = state.crafting.stackKey ? getInventoryStackEntry(state.crafting.stackKey) : null;
  const maxGroups = selectedEntry ? Math.floor(selectedEntry.quantity / CRAFT_ITEMS_PER_ATTEMPT) : 0;

  if (!selectedEntry || !isCraftableStack(selectedEntry)) {
    state.crafting.stackKey = "";
    state.crafting.groups = 0;
  } else if (state.crafting.groups > maxGroups) {
    state.crafting.groups = maxGroups;
  }

  const activeEntry = state.crafting.stackKey ? getInventoryStackEntry(state.crafting.stackKey) : null;
  const activeItem = activeEntry?.item || null;

  craftSlotsContainer.classList.toggle("is-crafting", state.crafting.animating);
  craftList.innerHTML = "";
  if (entries.length === 0) {
    const empty = document.createElement("div");
    empty.className = "craft-message";
    empty.textContent = text.craftEmpty;
    craftList.append(empty);
  }

  for (const entry of entries) {
    const button = document.createElement("button");
    button.className = "craft-stack-button";
    button.type = "button";
    button.disabled = state.crafting.animating;
    button.style.setProperty("--tier-color", entry.item.tierColor);
    button.classList.toggle("is-selected", entry.stackKey === state.crafting.stackKey);
    button.title = `${entry.item.tier} ${getPetalDisplayName(entry.item)} · ${entry.quantity}`;

    const preview = document.createElement("div");
    preview.className = "item-slot";
    renderItemContent(preview, entry.item, entry.quantity);
    preview.draggable = false;

    const info = document.createElement("div");
    info.className = "craft-stack-info";

    const name = document.createElement("div");
    name.className = "craft-stack-name";
    name.textContent = `${entry.item.tier} ${getPetalDisplayName(entry.item)}`;

    const meta = document.createElement("div");
    meta.className = "craft-stack-meta";
    meta.textContent = `${entry.quantity} / ${Math.floor(
      entry.quantity / CRAFT_ITEMS_PER_ATTEMPT,
    )} x ${formatChancePercent(getCraftChance(entry.item.tierIndex))}`;

    info.append(name, meta);
    button.append(preview, info);
    button.addEventListener("click", (event) => loadCraftingGroup(entry.stackKey, event.shiftKey));
    craftList.append(button);
  }

  const visibleCells = Math.max(40, Math.ceil(entries.length / 5) * 5);
  for (let index = entries.length; index < visibleCells; index++) {
    const placeholder = document.createElement("div");
    placeholder.className = "craft-empty-slot";
    craftList.append(placeholder);
  }

  craftSlots.forEach((slot) => {
    renderItemContent(slot, activeItem, state.crafting.groups);
    slot.draggable = false;
  });

  craftChanceLabel.textContent =
    activeItem && state.crafting.groups > 0
      ? `${text.craftChance}: ${formatChancePercent(getCraftChance(activeItem.tierIndex))}`
      : "";
  craftSubmitButton.disabled = !activeItem || state.crafting.groups <= 0;
  craftSubmitButton.disabled = craftSubmitButton.disabled || state.crafting.animating;
  craftMessage.textContent = state.crafting.message;
}

function loadCraftingGroup(stackKey, selectAll = false) {
  if (state.crafting.animating) return;

  const entry = getInventoryStackEntry(stackKey);
  if (!entry || !isCraftableStack(entry)) return;

  if (state.crafting.stackKey !== stackKey) {
    state.crafting.stackKey = stackKey;
    state.crafting.groups = 0;
    state.crafting.message = "";
  }

  const maxGroups = Math.floor(entry.quantity / CRAFT_ITEMS_PER_ATTEMPT);
  state.crafting.groups = selectAll ? maxGroups : Math.min(maxGroups, state.crafting.groups + 1);
  renderCraftingUi();
}

function removeInventoryItemsByStackKey(stackKey, count) {
  let remaining = count;

  for (let index = state.inventory.length - 1; index >= 0 && remaining > 0; index--) {
    if (getItemStackKey(state.inventory[index]) !== stackKey) continue;
    state.inventory.splice(index, 1);
    remaining -= 1;
  }

  return count - remaining;
}

function createCraftPreviewItem(sourceItem, tierIndex) {
  const tier = getTier(tierIndex);

  return {
    ...sourceItem,
    tierIndex: tier.index,
    tier: tier.name,
    tierColor: tier.color,
  };
}

function showCraftResultEffect(sourceItem, successes) {
  if (!craftSlotsContainer) return;

  if (successes > 0) {
    const burst = document.createElement("div");
    burst.className = "craft-result-burst";
    burst.style.setProperty("--tier-color", getTier(sourceItem.tierIndex + 1).color);
    burst.style.setProperty("--tier-border-color", darkenHexColor(getTier(sourceItem.tierIndex + 1).color));

    const image = document.createElement("img");
    image.src = ASSETS[sourceItem.asset];
    image.alt = "";
    burst.append(image);

    if (successes > 1) {
      const count = document.createElement("b");
      count.className = "craft-result-count";
      count.textContent = `${successes}`;
      burst.append(count);
    }

    craftSlotsContainer.append(burst);
    window.setTimeout(() => burst.remove(), CRAFT_RESULT_EFFECT_MS);
    return;
  }

  const shardVectors = [
    [-58, -38, -122],
    [-32, -54, 76],
    [3, -62, 148],
    [42, -44, -58],
    [64, -12, 116],
    [49, 30, -166],
    [10, 58, 44],
    [-36, 47, -92],
    [-66, 11, 156],
  ];

  for (const [x, y, rotate] of shardVectors) {
    const shard = document.createElement("span");
    shard.className = "craft-shard";
    shard.style.setProperty("--shard-x", `${x}px`);
    shard.style.setProperty("--shard-y", `${y}px`);
    shard.style.setProperty("--shard-rotate", `${rotate}deg`);
    craftSlotsContainer.append(shard);
    window.setTimeout(() => shard.remove(), CRAFT_RESULT_EFFECT_MS);
  }
}

function resolveCraftAllAttempts(quantity, chance) {
  let available = quantity;
  let attempts = 0;
  let successes = 0;

  while (available >= CRAFT_ITEMS_PER_ATTEMPT) {
    available -= CRAFT_ITEMS_PER_ATTEMPT;
    attempts += 1;

    if (Math.random() <= chance) {
      successes += 1;
    } else {
      available += 1 + Math.floor(Math.random() * 4);
    }
  }

  return {
    attempts,
    successes,
    returnedPetals: available,
  };
}

function craftLoadedPetals() {
  if (state.crafting.animating) return;

  const entry = state.crafting.stackKey ? getInventoryStackEntry(state.crafting.stackKey) : null;
  if (!entry || !isCraftableStack(entry) || state.crafting.groups <= 0) {
    renderCraftingUi();
    return;
  }

  const attempts = Math.min(
    state.crafting.groups,
    Math.floor(entry.quantity / CRAFT_ITEMS_PER_ATTEMPT),
  );
  if (attempts <= 0) {
    renderCraftingUi();
    return;
  }
  const sourceItem = createCraftPreviewItem(entry.item, entry.item.tierIndex);
  const chance = getCraftChance(sourceItem.tierIndex);

  state.crafting.groups = attempts;
  state.crafting.animating = true;
  state.crafting.message = "";
  renderCraftingUi();

  window.setTimeout(() => {
    const currentEntry = getInventoryStackEntry(entry.stackKey);
    const availableQuantity = currentEntry?.quantity || 0;
    const removed = removeInventoryItemsByStackKey(
      entry.stackKey,
      Math.min(availableQuantity, attempts * CRAFT_ITEMS_PER_ATTEMPT),
    );
    const result = resolveCraftAllAttempts(removed, chance);
    const text = getCurrentText();

    for (let index = 0; index < result.successes; index++) {
      state.inventory.push(createPetalItem(sourceItem.name, sourceItem.tierIndex + 1));
    }
    for (let index = 0; index < result.returnedPetals; index++) {
      state.inventory.push(createPetalItem(sourceItem.name, sourceItem.tierIndex));
    }

    state.crafting.stackKey = "";
    state.crafting.groups = 0;
    state.crafting.animating = false;
    state.crafting.message = `${text.craftResult}: ${result.successes} / ${text.craftFailed}: ${
      result.attempts - result.successes
    } / ${text.craftReturned}: ${result.returnedPetals}`;
    sortInventory();
    renderItemUi();
    showCraftResultEffect(sourceItem, result.successes);
  }, CRAFT_COLLIDE_ANIMATION_MS);
}

function renderForgingUi() {
  if (!forgeList) return;

  const text = getCurrentText();
  const entries = getInventoryStackEntries().filter(isForgeableStack);
  const selectedEntry = state.forging.stackKey ? getInventoryStackEntry(state.forging.stackKey) : null;
  const maxGroups = selectedEntry ? Math.floor(selectedEntry.quantity / FORGE_ITEMS_PER_ATTEMPT) : 0;

  if (!selectedEntry || !isForgeableStack(selectedEntry)) {
    state.forging.stackKey = "";
    state.forging.groups = 0;
  } else if (state.forging.groups > maxGroups) {
    state.forging.groups = maxGroups;
  }

  const activeEntry = state.forging.stackKey ? getInventoryStackEntry(state.forging.stackKey) : null;
  const activeItem = activeEntry?.item || null;
  const resultItem = activeItem ? createPetalPreviewItem("ThunderHammer", activeItem.tierIndex) : null;

  forgeSlotsContainer.classList.toggle("is-crafting", state.forging.animating);
  forgeList.innerHTML = "";
  if (entries.length === 0) {
    const empty = document.createElement("div");
    empty.className = "craft-message";
    empty.textContent = text.forgeEmpty;
    forgeList.append(empty);
  }

  for (const entry of entries) {
    const button = document.createElement("button");
    button.className = "craft-stack-button";
    button.type = "button";
    button.disabled = state.forging.animating;
    button.style.setProperty("--tier-color", entry.item.tierColor);
    button.style.setProperty("--tier-border-color", darkenHexColor(entry.item.tierColor));
    button.classList.toggle("is-selected", entry.stackKey === state.forging.stackKey);
    button.title = `${entry.item.tier} ${getPetalDisplayName(entry.item)} · ${entry.quantity}`;

    const preview = document.createElement("div");
    preview.className = "item-slot";
    renderItemContent(preview, entry.item, entry.quantity);
    preview.draggable = false;

    const info = document.createElement("div");
    info.className = "craft-stack-info";

    const name = document.createElement("div");
    name.className = "craft-stack-name";
    name.textContent = `${entry.item.tier} ${getPetalDisplayName(entry.item)}`;

    const meta = document.createElement("div");
    meta.className = "craft-stack-meta";
    meta.textContent = `${entry.quantity} / ${Math.floor(entry.quantity / FORGE_ITEMS_PER_ATTEMPT)}`;

    info.append(name, meta);
    button.append(preview, info);
    button.addEventListener("click", (event) => loadForgeGroup(entry.stackKey, event.shiftKey));
    forgeList.append(button);
  }

  const visibleCells = Math.max(40, Math.ceil(entries.length / 5) * 5);
  for (let index = entries.length; index < visibleCells; index++) {
    const placeholder = document.createElement("div");
    placeholder.className = "craft-empty-slot";
    forgeList.append(placeholder);
  }

  forgeSlots.forEach((slot) => {
    renderItemContent(slot, activeItem, state.forging.groups);
    slot.draggable = false;
  });

  forgeChanceLabel.textContent = activeItem
    ? `${text.forgeChance}: ${resultItem.tier} ${getPetalDisplayName(resultItem)}`
    : text.forgeChance;
  forgeSubmitButton.disabled = !activeItem || state.forging.groups <= 0 || state.forging.animating;
  forgeMessage.textContent = state.forging.message;
}

function loadForgeGroup(stackKey, selectAll = false) {
  if (state.forging.animating) return;

  const entry = getInventoryStackEntry(stackKey);
  if (!entry || !isForgeableStack(entry)) return;

  if (state.forging.stackKey !== stackKey) {
    state.forging.stackKey = stackKey;
    state.forging.groups = 0;
    state.forging.message = "";
  }

  const maxGroups = Math.floor(entry.quantity / FORGE_ITEMS_PER_ATTEMPT);
  state.forging.groups = selectAll ? maxGroups : Math.min(maxGroups, state.forging.groups + 1);
  renderForgingUi();
}

function showForgeResultEffect(resultItem, count) {
  if (!forgeSlotsContainer || !resultItem) return;

  const burst = document.createElement("div");
  burst.className = "craft-result-burst forge-result-burst";
  burst.style.setProperty("--tier-color", resultItem.tierColor);
  burst.style.setProperty("--tier-border-color", darkenHexColor(resultItem.tierColor));

  const image = document.createElement("img");
  image.src = ASSETS[resultItem.asset];
  image.alt = "";
  burst.append(image);

  if (count > 1) {
    const countLabel = document.createElement("b");
    countLabel.className = "craft-result-count";
    countLabel.textContent = `${count}`;
    burst.append(countLabel);
  }

  forgeSlotsContainer.append(burst);
  window.setTimeout(() => burst.remove(), CRAFT_RESULT_EFFECT_MS);
}

function forgeLoadedStingers() {
  if (state.forging.animating) return;

  const entry = state.forging.stackKey ? getInventoryStackEntry(state.forging.stackKey) : null;
  if (!entry || !isForgeableStack(entry) || state.forging.groups <= 0) {
    renderForgingUi();
    return;
  }

  const attempts = Math.min(
    state.forging.groups,
    Math.floor(entry.quantity / FORGE_ITEMS_PER_ATTEMPT),
  );
  if (attempts <= 0) {
    renderForgingUi();
    return;
  }

  const sourceItem = createCraftPreviewItem(entry.item, entry.item.tierIndex);
  const resultItem = createPetalPreviewItem("ThunderHammer", sourceItem.tierIndex);
  state.forging.groups = attempts;
  state.forging.animating = true;
  state.forging.message = "";
  renderForgingUi();

  window.setTimeout(() => {
    const currentEntry = getInventoryStackEntry(entry.stackKey);
    const availableQuantity = currentEntry?.quantity || 0;
    const removed = removeInventoryItemsByStackKey(
      entry.stackKey,
      Math.min(availableQuantity, attempts * FORGE_ITEMS_PER_ATTEMPT),
    );
    const resultCount = Math.floor(removed / FORGE_ITEMS_PER_ATTEMPT);
    const text = getCurrentText();

    for (let index = 0; index < resultCount; index++) {
      state.inventory.push(createPetalItem("ThunderHammer", sourceItem.tierIndex));
    }

    state.forging.stackKey = "";
    state.forging.groups = 0;
    state.forging.animating = false;
    state.forging.message = `${text.forgeResult}: ${resultItem.tier} ${getPetalDisplayName(resultItem)} x${resultCount}`;
    sortInventory();
    renderItemUi();
    showForgeResultEffect(resultItem, resultCount);
  }, CRAFT_COLLIDE_ANIMATION_MS);
}

function setPointer(clientX, clientY) {
  state.pointer.x = clientX;
  state.pointer.y = clientY;
  state.pointer.active = true;
  updatePointerWorld();
}

function getBox(centerX, centerY, width, height) {
  return {
    x: centerX - width / 2,
    y: centerY - height / 2,
    width,
    height,
  };
}

function boxesOverlap(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function getWorldViewportBounds(margin = 0) {
  const viewScale = getViewScale();
  const halfWidth = state.width / (2 * viewScale);
  const halfHeight = state.height / (2 * viewScale);

  return {
    left: state.camera.x - halfWidth - margin,
    right: state.camera.x + halfWidth + margin,
    top: state.camera.y - halfHeight - margin,
    bottom: state.camera.y + halfHeight + margin,
  };
}

function circleIntersectsBounds(x, y, radius, bounds) {
  return (
    x + radius >= bounds.left &&
    x - radius <= bounds.right &&
    y + radius >= bounds.top &&
    y - radius <= bounds.bottom
  );
}

function isMonsterNearPlayer(monster, extraRadius = 0) {
  const activeRadius = MONSTER_PLAYER_ACTIVE_RADIUS + monster.radius + extraRadius;
  return (
    Math.abs(monster.x - state.player.x) <= activeRadius &&
    Math.abs(monster.y - state.player.y) <= activeRadius
  );
}

function shouldFullySimulateMonster(monster, bounds) {
  if (!state.spawned) return false;
  return isMonsterNearPlayer(monster) || circleIntersectsBounds(monster.x, monster.y, monster.radius, bounds);
}

function isMonsterChasingPlayer(monster, time) {
  return (
    monster.name === "Ladybug" &&
    monster.tierIndex >= LADYBUG_CHASE_TIER_INDEX &&
    (monster.lastPlayerHitAt || 0) > 0 &&
    time - monster.lastPlayerHitAt <= LADYBUG_CHASE_DURATION_MS &&
    Math.hypot(monster.x - state.player.x, monster.y - state.player.y) <= LADYBUG_CHASE_RADIUS + monster.radius
  );
}

function getPlayerHitbox() {
  return getCircleHitShape(state.player.x, state.player.y, state.player.hitRadius);
}

function getMonsterHitbox(monster) {
  return getMonsterHitShape(monster);
}

function getWeaponHitbox(weapon) {
  return getCircleHitShape(weapon.x, weapon.y, weapon.hitRadius || state.weapon.hitRadius);
}

function getCircleHitShape(x, y, radius) {
  return { type: "circle", x, y, radius };
}

function getMonsterHitShape(monster) {
  if (monster.hitShape === "circle") {
    return getCircleHitShape(monster.x, monster.y, monster.hitRadius || Math.max(monster.hitRadiusX, monster.hitRadiusY));
  }

  const idleTime = state.lastTime * 0.001 * monster.wobbleSpeed + monster.wobbleSeed;
  const sway = Math.sin(idleTime * 1.45) * monster.wobbleAmount;

  return {
    type: "ellipse",
    x: monster.x,
    y: monster.y,
    radiusX: monster.hitRadiusX,
    radiusY: monster.hitRadiusY,
    angle: monster.faceAngle + sway,
  };
}

function pointInRotatedEllipse(x, y, ellipse, inflate = 0) {
  const dx = x - ellipse.x;
  const dy = y - ellipse.y;
  const cos = Math.cos(-ellipse.angle);
  const sin = Math.sin(-ellipse.angle);
  const localX = dx * cos - dy * sin;
  const localY = dx * sin + dy * cos;
  const radiusX = ellipse.radiusX + inflate;
  const radiusY = ellipse.radiusY + inflate;

  return (localX * localX) / (radiusX * radiusX) + (localY * localY) / (radiusY * radiusY) <= 1;
}

function ellipseRadiusToward(ellipse, worldAngle) {
  const localAngle = worldAngle - ellipse.angle;
  const cos = Math.cos(localAngle);
  const sin = Math.sin(localAngle);

  return 1 / Math.sqrt((cos * cos) / (ellipse.radiusX * ellipse.radiusX) + (sin * sin) / (ellipse.radiusY * ellipse.radiusY));
}

function hitShapeRadiusToward(shape, worldAngle) {
  if (shape.type === "circle") return shape.radius;
  return ellipseRadiusToward(shape, worldAngle);
}

function circleCircleOverlap(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y) <= a.radius + b.radius;
}

function circleEllipseOverlap(circle, ellipse) {
  return pointInRotatedEllipse(circle.x, circle.y, ellipse, circle.radius);
}

function sampleEllipsePoints(ellipse, steps = 20) {
  const points = [];
  const cos = Math.cos(ellipse.angle);
  const sin = Math.sin(ellipse.angle);

  for (let i = 0; i < steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    const localX = Math.cos(angle) * ellipse.radiusX;
    const localY = Math.sin(angle) * ellipse.radiusY;
    points.push({
      x: ellipse.x + localX * cos - localY * sin,
      y: ellipse.y + localX * sin + localY * cos,
    });
  }

  return points;
}

function ellipseEllipseOverlap(a, b) {
  const broadRadiusA = Math.max(a.radiusX, a.radiusY);
  const broadRadiusB = Math.max(b.radiusX, b.radiusY);
  if (Math.hypot(a.x - b.x, a.y - b.y) > broadRadiusA + broadRadiusB) return false;
  if (pointInRotatedEllipse(a.x, a.y, b) || pointInRotatedEllipse(b.x, b.y, a)) return true;

  return (
    sampleEllipsePoints(a).some((point) => pointInRotatedEllipse(point.x, point.y, b)) ||
    sampleEllipsePoints(b).some((point) => pointInRotatedEllipse(point.x, point.y, a))
  );
}

function hitShapesOverlap(a, b) {
  if (a.type === "circle" && b.type === "circle") return circleCircleOverlap(a, b);
  if (a.type === "circle" && b.type === "ellipse") return circleEllipseOverlap(a, b);
  if (a.type === "ellipse" && b.type === "circle") return circleEllipseOverlap(b, a);
  return ellipseEllipseOverlap(a, b);
}

function resolvePlayerMonsterCollisions(time = performance.now()) {
  if (!state.spawned) return;
  if (!state.player.alive || state.player.hidden || state.player.dying) return;

  const playerShape = getPlayerHitbox();

  for (const monster of state.monsters) {
    if (monster.hidden || monster.dying || !monster.alive) continue;
    if (!isMonsterNearPlayer(monster, state.player.hitRadius + 80)) continue;

    const monsterShape = getMonsterHitbox(monster);
    if (!hitShapesOverlap(playerShape, monsterShape)) continue;

    const playerWasHit = time >= monster.nextBodyDamageAt
      ? damageCreature(state.player, monster.attack, time)
      : false;
    if (playerWasHit) {
      monster.nextBodyDamageAt = time + monster.bodyDamageCooldown;
    }

    if (time >= (monster.nextPlayerBodyDamageAt || 0)) {
      const wasAlive = monster.alive;
      const bodyDamage = getPlayerBodyDamage();
      if (damageCreature(monster, bodyDamage, time)) {
        addDamageNumber(monster, bodyDamage, time);
        monster.lastPlayerHitAt = time;
        if (wasAlive && !monster.alive) {
          addPlayerExperience(monster.experienceReward);
          spawnMonsterDrops(monster);
        }
      }
      monster.nextPlayerBodyDamageAt = time + PLAYER_BODY_DAMAGE_COOLDOWN_MS;
    }

    const dx = state.player.x - monster.x;
    const dy = state.player.y - monster.y;
    const angle = Math.atan2(dy, dx);
    const distance = Math.hypot(dx, dy) || 1;
    const targetDistance =
      state.player.hitRadius + hitShapeRadiusToward(monsterShape, angle) + 0.5;
    const push = Math.max(1, targetDistance - distance);

    moveCircleEntityWithMapCollision(
      state.player,
      state.player.x + Math.cos(angle) * push,
      state.player.y + Math.sin(angle) * push,
      state.player.hitRadius,
    );

    clampEntityToMap(state.player, state.player.radius);
  }
}

function getDeathProgress(creature, time) {
  if (!creature.dying) return 0;
  return Math.min(1, (time - creature.deathStartedAt) / creature.deathDuration);
}

function getCreatureScale(creature, time) {
  const progress = getDeathProgress(creature, time);
  if (progress <= 0) return 1;
  return 1 - (1 - DEATH_END_SCALE) * progress;
}

function getCreatureRedAlpha(creature, time) {
  if (creature.dying) {
    return 0.9 + getDeathProgress(creature, time) * 0.1;
  }

  return Math.min(0.85, (creature.hitFlash / HIT_FLASH_SECONDS) * 0.85);
}

function updateCreatureEffects(creature, dt, time) {
  creature.hitFlash = Math.max(0, creature.hitFlash - dt);
  if (creature.dying && getDeathProgress(creature, time) >= 1) {
    creature.hidden = true;
  }
}

function syncDeathScreen() {
  deathScreen.classList.toggle("is-hidden", !state.spawned || !state.player.hidden);
}

function isDeathScreenOpen() {
  return !deathScreen.classList.contains("is-hidden");
}

function respawnPlayer() {
  const now = performance.now();
  const routeSpawn = getPlayerSpawnWorldPosition();
  const spawnPoint = findNearestFloorPosition(routeSpawn.x, routeSpawn.y, state.player.hitRadius);

  state.player.x = spawnPoint.x;
  state.player.y = spawnPoint.y;
  state.player.health = state.player.maxHealth;
  state.player.hitFlash = 0;
  state.player.alive = true;
  state.player.dying = false;
  state.player.hidden = false;
  state.player.deathStartedAt = 0;
  state.player.invulnerableUntil = now + RESPAWN_INVULNERABLE_MS;
  state.camera.x = spawnPoint.x;
  state.camera.y = spawnPoint.y;
  state.pointer.x = state.width / 2;
  state.pointer.y = state.height / 2;
  state.pointer.active = false;
  state.controls.attack = false;
  state.controls.defend = false;
  state.uiLockMovement = false;
  state.input.attack = false;
  state.input.defend = false;
  state.input.joystickX = 0;
  state.input.joystickY = 0;
  state.weapon.orbitRadius = getPetalOrbitRadius(state.weapon.neutralRadius);
  state.weapon.targetRadius = getPetalOrbitRadius(state.weapon.neutralRadius);
  for (const petal of [...state.weapon.petals, ...state.weapon.secondaryPetals]) {
    if (!petal) continue;
    petal.active = true;
    petal.durability = petal.maxDurability;
    petal.readyAt = 0;
    petal.cooldownStartedAt = 0;
    if (petal.name === "Light") {
      ensureLightOrbStates(petal);
      petal.orbs.forEach((orb) => {
        orb.active = true;
        orb.durability = petal.maxDurability;
        orb.readyAt = 0;
        orb.cooldownStartedAt = 0;
      });
      syncPetalActiveState(petal);
    }
    petal.healEffectStartedAt = 0;
    petal.healEffectEndsAt = 0;
    resetPetalPlacement(petal);
  }
  updatePointerWorld();
  renderItemUi();
  syncDeathScreen();
}

function startGame() {
  if (state.spawned) return;

  const text = getCurrentText();
  const trimmedName = nameInput.value.trim();
  state.player.name = (trimmedName || text.defaultPlayerName).slice(0, 16);
  closeFloatingPanels();
  state.spawned = true;
  document.body.classList.remove("is-menu");
  document.body.classList.add("is-playing");
  startScreen.classList.add("is-hidden");
  nameInput.blur();
  respawnPlayer();
  if (!state.accountName) {
    openAccountPanel("accountLoginRequired");
  }
}

function showAntHellNotice() {
  window.clearTimeout(antHellNoticeTimeout);
  antHellNotice.textContent = getCurrentText().antHellUnavailable;
  antHellNotice.classList.remove("is-hidden");
  antHellNoticeTimeout = window.setTimeout(() => {
    antHellNotice.classList.add("is-hidden");
  }, 2400);
}

function selectMode(mode) {
  if (mode === "antHell") {
    showAntHellNotice();
    mode = "garden";
  } else {
    antHellNotice.classList.add("is-hidden");
  }

  state.mode = mode;
  modeButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.mode === mode);
  });
}

function applyLayoutMode() {
  const isAutoTablet =
    state.settings.layout === "auto" &&
    (window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 900);
  const isTablet = state.settings.layout === "tablet" || isAutoTablet;

  state.settings.resolvedLayout = isTablet ? "tablet" : "desktop";
  document.body.classList.toggle("is-tablet-ui", isTablet);
  document.body.classList.toggle("has-joystick", state.settings.movement === "joystick");
}

function usesTouchControls() {
  return state.settings.resolvedLayout === "tablet" || state.settings.movement === "joystick";
}

function getCurrentText() {
  return TEXT[state.settings.language] || TEXT.zh;
}

function applyLanguage() {
  const text = getCurrentText();

  document.documentElement.lang = state.settings.language === "en" ? "en" : "zh-CN";
  translatedElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (text[key]) element.textContent = text[key];
  });
  settingsButton.setAttribute("aria-label", text.settings);
  settingsPanel.setAttribute("aria-label", text.settings);
  leaderboardPanel.setAttribute("aria-label", text.leaderboard);
  accountButton.setAttribute("aria-label", text.login);
  accountPanel.setAttribute("aria-label", text.login);
  monsterDexButton.setAttribute("aria-label", text.monsterDex);
  monsterDexPanel.setAttribute("aria-label", text.monsterDex);
  petalDexButton.setAttribute("aria-label", text.petalDex);
  petalDexPanel.setAttribute("aria-label", text.petalDex);
  talentButton.setAttribute("aria-label", text.talents);
  talentPanel.setAttribute("aria-label", text.talents);
  craftButton.setAttribute("aria-label", text.craft);
  craftPanel.setAttribute("aria-label", text.craft);
  forgeButton.setAttribute("aria-label", text.forge);
  forgePanel.setAttribute("aria-label", text.forge);
  authorPanel.setAttribute("aria-label", text.authorPanel);
  inventoryPanel.setAttribute("aria-label", text.inventory);
  touchAttackButton.setAttribute("aria-label", text.attack);
  touchDefendButton.setAttribute("aria-label", text.defend);
  populateAuthorControls();
  updateAuthorPanelUi();
  renderPetalDexUi();
  updateLeaderboard(performance.now(), true);
}

function rebuildActiveMap() {
  MAP_ROUTE = getRouteSegments(getActiveMapDefinition().routePoints);
  buildMapCollisionData();
  buildMapArtCanvas();
}

function switchActiveMap(mapId) {
  state.mapId = MAP_DEFINITIONS[mapId] ? mapId : "garden";
  rebuildActiveMap();
  const spawn = findNearestFloorPosition(
    getPlayerSpawnWorldPosition().x,
    getPlayerSpawnWorldPosition().y,
    state.player.hitRadius,
  );
  state.player.x = spawn.x;
  state.player.y = spawn.y;
  state.camera.x = spawn.x;
  state.camera.y = spawn.y;
  state.pointer.x = state.width / 2;
  state.pointer.y = state.height / 2;
  updatePointerWorld();
  state.drops = [];
  state.monsters = [];
  seedMonsterPopulation();
  renderMonsterDexUi();
}

function getMapPortalDefinitions(mapId = state.mapId) {
  if (mapId === "garden") {
    return [{ targetMapId: "garden2", ...routeTileToWorld(12.2, 15.4) }];
  }
  if (mapId === "garden2") {
    return [{ targetMapId: "garden", ...routeTileToWorld(23.5, 57.5) }];
  }
  return [];
}

function startMapPortalTransition(portal, time) {
  if (state.portalTransition.active || !portal) return;
  state.portalTransition.active = true;
  state.portalTransition.startedAt = time;
  state.portalTransition.duration = GARDEN2_PORTAL_DURATION_MS;
  state.portalTransition.targetMapId = portal.targetMapId;
  state.portalTransition.x = portal.x;
  state.portalTransition.y = portal.y;
  state.uiLockMovement = true;
}

function updatePortalTransition(time) {
  if (!state.portalTransition.active) return false;

  const progress = clamp(
    (time - state.portalTransition.startedAt) / state.portalTransition.duration,
    0,
    1,
  );
  if (progress < 1) return true;

  const targetMapId = state.portalTransition.targetMapId;
  state.portalTransition.active = false;
  state.uiLockMovement = false;
  switchActiveMap(targetMapId);
  return false;
}

function updateMapPortals(time) {
  if (!state.spawned || state.portalTransition.active) return;

  for (const portal of getMapPortalDefinitions()) {
    if (Math.hypot(state.player.x - portal.x, state.player.y - portal.y) <= GARDEN2_PORTAL_RADIUS) {
      startMapPortalTransition(portal, time);
      return;
    }
  }
}

function syncSettingsUi() {
  const text = getCurrentText();

  applyLanguage();
  settingsOptions.forEach((button) => {
    const setting = button.dataset.setting;
    const value = button.dataset.value;
    button.classList.toggle("is-selected", state.settings[setting] === value);
  });
  musicToggle.classList.toggle("is-on", state.settings.music);
  musicToggle.textContent = state.settings.music ? text.on : text.off;
  musicToggle.setAttribute("aria-pressed", `${state.settings.music}`);
  hitboxToggle.classList.toggle("is-on", state.settings.showHitboxes);
  hitboxToggle.textContent = state.settings.showHitboxes ? text.on : text.off;
  hitboxToggle.setAttribute("aria-pressed", `${state.settings.showHitboxes}`);
  reverseAttackToggle.classList.toggle("is-on", state.settings.reverseAttack);
  reverseAttackToggle.textContent = state.settings.reverseAttack ? text.on : text.off;
  reverseAttackToggle.setAttribute("aria-pressed", `${state.settings.reverseAttack}`);
  playerHealthToggle.classList.toggle("is-on", state.settings.showPlayerHealthBar);
  playerHealthToggle.textContent = state.settings.showPlayerHealthBar ? text.on : text.off;
  playerHealthToggle.setAttribute("aria-pressed", `${state.settings.showPlayerHealthBar}`);
  otherPetalsToggle.classList.toggle("is-on", state.settings.showOtherPetals);
  otherPetalsToggle.textContent = state.settings.showOtherPetals ? text.on : text.off;
  otherPetalsToggle.setAttribute("aria-pressed", `${state.settings.showOtherPetals}`);
  damageNumbersToggle.classList.toggle("is-on", state.settings.showDamageNumbers);
  damageNumbersToggle.textContent = state.settings.showDamageNumbers ? text.on : text.off;
  damageNumbersToggle.setAttribute("aria-pressed", `${state.settings.showDamageNumbers}`);
  qualitySelect.value = state.settings.quality;
  applyLayoutMode();
  renderTalentUi();
  renderCraftingUi();
  renderForgingUi();
  renderMonsterDexUi();
}

function syncCombatControls() {
  if (state.settings.reverseAttack) {
    state.controls.attack = state.input.defend;
    state.controls.defend = state.input.attack;
  } else {
    state.controls.attack = state.input.attack;
    state.controls.defend = state.input.defend;
  }
}

function resetPetalPlacement(petal) {
  if (!petal?.placeableBarrier) return;
  petal.placed = false;
  petal.placedX = 0;
  petal.placedY = 0;
  petal.placedAngle = 0;
  petal.placedAt = 0;
  petal.nextBarrierDamageAt = 0;
}

function placePollenPetals({ orbitRadius = state.weapon.orbitRadius } = {}) {
  if (!state.spawned || !state.player.alive || state.player.dying || state.player.hidden) return;

  const now = performance.now();
  const weaponPositions = getWeaponPositions(orbitRadius);
  for (const weapon of weaponPositions) {
    const petal = weapon.petal;
    if (!petal?.placeableBarrier || !petal.active || petal.placed) continue;

    petal.placed = true;
    petal.placedX = weapon.x;
    petal.placedY = weapon.y;
    petal.placedAngle = weapon.angle;
    petal.placedAt = now;
    petal.nextBarrierDamageAt = 0;
  }
}

function placePollenPetalsFromAttack() {
  placePollenPetals({ orbitRadius: getPetalOrbitRadius(state.weapon.attackRadius) });
}

function closeFloatingPanels() {
  settingsPanel.classList.add("is-hidden");
  settingsButton.classList.remove("is-active");
  talentPanel.classList.add("is-hidden");
  talentButton.classList.remove("is-active");
  craftPanel.classList.add("is-hidden");
  craftButton.classList.remove("is-active");
  forgePanel.classList.add("is-hidden");
  forgeButton.classList.remove("is-active");
  accountPanel.classList.add("is-hidden");
  accountButton.classList.remove("is-active");
  petalDexPanel.classList.add("is-hidden");
  petalDexButton.classList.remove("is-active");
  monsterDexPanel.classList.add("is-hidden");
  monsterDexButton.classList.remove("is-active");
  authorPanel.classList.add("is-hidden");
}

function isFloatingPanelTarget(target) {
  return (
    settingsPanel.contains(target) ||
    settingsButton.contains(target) ||
    talentPanel.contains(target) ||
    talentButton.contains(target) ||
    craftPanel.contains(target) ||
    craftButton.contains(target) ||
    forgePanel.contains(target) ||
    forgeButton.contains(target) ||
    accountPanel.contains(target) ||
    accountButton.contains(target) ||
    petalDexPanel.contains(target) ||
    petalDexButton.contains(target) ||
    monsterDexPanel.contains(target) ||
    monsterDexButton.contains(target) ||
    authorCard.contains(target)
  );
}

function drawAuthorMapPreview() {
  const size = AUTHOR_MAP_PREVIEW_SIZE;
  authorMapCanvas.width = size;
  authorMapCanvas.height = size;
  authorMapCtx.imageSmoothingEnabled = false;
  authorMapCtx.clearRect(0, 0, size, size);
  authorMapCtx.fillStyle = GARDEN_BASE_GREEN;
  authorMapCtx.fillRect(0, 0, size, size);
  if (state.mapArtCanvas) {
    authorMapCtx.drawImage(state.mapArtCanvas, 0, 0, size, size);
  }
  drawGarden2PortalMapMarker(authorMapCtx, size, size, 8);
}

function updateAuthorPanelUi() {
  const text = getCurrentText();

  authorGate.classList.toggle("is-hidden", state.author.verified);
  authorTeleportArea.classList.toggle("is-hidden", !state.author.verified);
  authorMessage.textContent = state.author.verified ? text.authorReady : "";
  authorTeleportButton.disabled = !state.author.hasSelection;
  authorSpawnMonsterButton.disabled = !state.author.verified;
  authorMapMarker.classList.toggle("is-hidden", !state.author.hasSelection);
  if (state.author.hasSelection) {
    const left = ((state.author.selectedX + MAP_HALF_WIDTH) / MAP_WIDTH) * 100;
    const top = ((state.author.selectedY + MAP_HALF_HEIGHT) / MAP_HEIGHT) * 100;
    authorMapMarker.style.left = `${left}%`;
    authorMapMarker.style.top = `${top}%`;
  }
}

function setSelectOptions(select, entries, selectedValue = null) {
  if (!select) return;
  const targetValue = selectedValue ?? select.value;

  select.innerHTML = "";
  entries.forEach(({ value, label }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.append(option);
  });
  if (entries.some((entry) => entry.value === targetValue)) {
    select.value = targetValue;
  }
}

function populateAuthorControls() {
  const text = getCurrentText();
  setSelectOptions(
    authorItemNameSelect,
    Object.keys(PETAL_DEFINITIONS).map((name) => ({
      value: name,
      label: getPetalDisplayName({ name }),
    })),
  );
  setSelectOptions(
    authorItemTierSelect,
    TIERS.map((tier, index) => ({ value: `${index}`, label: tier.name })),
  );
  setSelectOptions(
    authorSpawnMapSelect,
    [
      { value: "garden", label: text.garden || "花园" },
      { value: "garden2", label: state.settings.language === "en" ? "Garden 2" : "花园2" },
    ],
  );
  setSelectOptions(
    authorMonsterSpeciesSelect,
    MONSTER_SPECIES.map((speciesName) => ({
      value: speciesName,
      label: getMonsterDisplayName(speciesName),
    })),
  );
  setSelectOptions(
    authorMonsterTierSelect,
    TIERS.map((tier, index) => ({ value: `${index}`, label: tier.name })),
  );
  if (authorLevelInput) authorLevelInput.value = state.player.level;
}

function getAuthorSelectedPoint(radius = state.player.hitRadius) {
  const x = state.author.hasSelection ? state.author.selectedX : state.player.x;
  const y = state.author.hasSelection ? state.author.selectedY : state.player.y;
  return findNearestFloorPosition(x, y, radius);
}

function getTotalSpentTalentPoints() {
  return TALENT_DEFINITIONS.reduce(
    (total, talent) => total + getTalentCumulativeCost(getTalentLevel(talent.id)),
    0,
  );
}

function getEarnedTalentPointsForLevel(level) {
  return Math.min(MAX_TALENT_POINTS, Math.max(0, level) + Math.floor(level / 10) * 10);
}

function setAuthorPlayerLevel() {
  if (!state.author.verified) return;

  const targetLevel = clamp(Math.floor(Number(authorLevelInput.value) || 1), 1, 600);
  const targetEarnedPoints = getEarnedTalentPointsForLevel(targetLevel);
  const spentPoints = getTotalSpentTalentPoints();
  state.player.level = targetLevel;
  state.player.experience = 0;
  state.player.nextExperience = getNextExperienceForLevel(targetLevel);
  state.player.baseMaxHealth = getBaseMaxHealthForLevel(targetLevel);
  if (spentPoints > targetEarnedPoints) {
    state.player.talents = Object.fromEntries(TALENT_DEFINITIONS.map((talent) => [talent.id, 0]));
    state.player.talentPoints = targetEarnedPoints;
  } else {
    state.player.talentPoints = targetEarnedPoints - spentPoints;
  }
  state.player.earnedTalentPoints = targetEarnedPoints;
  refreshPlayerMaxHealth();
  state.player.health = state.player.maxHealth;
  applyTalentEffects();
  renderTalentUi();
  renderItemUi();
  saveActiveAccount();
  authorMessage.textContent = `等级已改为 ${targetLevel}`;
}

function addAuthorInventoryItems() {
  if (!state.author.verified) return;

  const itemName = authorItemNameSelect.value || "Basic";
  const tierIndex = clamp(Math.floor(Number(authorItemTierSelect.value) || 0), 0, TIERS.length - 1);
  const quantity = clamp(Math.floor(Number(authorItemQuantityInput.value) || 1), 1, 9999);
  for (let index = 0; index < quantity; index++) {
    state.inventory.push(createPetalItem(itemName, tierIndex));
  }
  sortInventory();
  renderItemUi();
  saveActiveAccount();
  authorMessage.textContent = `已加入 ${TIERS[tierIndex].name} ${getPetalDisplayName({ name: itemName })} x${quantity}`;
}

function spawnAuthorMonsters() {
  if (!state.author.verified) return;

  if (!state.author.hasSelection) {
    updateAuthorPanelUi();
    authorMessage.textContent = getCurrentText().authorSpawnPickPoint;
    return;
  }

  const mapId = authorSpawnMapSelect.value || state.mapId;
  if (MAP_DEFINITIONS[mapId] && mapId !== state.mapId) {
    switchActiveMap(mapId);
  }

  const speciesName = authorMonsterSpeciesSelect.value || "Bee";
  const minTierIndex = mapId === "garden2" ? getTierIndexByName("Eternal") : 0;
  const tierIndex = clamp(Math.floor(Number(authorMonsterTierSelect.value) || 0), minTierIndex, TIERS.length - 1);
  const quantity = clamp(Math.floor(Number(authorMonsterQuantityInput.value) || 1), 1, 3000);
  const stats = MONSTER_DEFINITIONS[speciesName]?.stats || BEE_STATS;
  const spawnRadius = scaleSizeByTier(stats.radius, tierIndex);
  const center = getAuthorSelectedPoint(spawnRadius);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  let spawnedCount = 0;

  for (let index = 0; index < quantity; index++) {
    const ringRadius = Math.sqrt(index) * Math.max(54, spawnRadius * 1.4);
    const angle = index * goldenAngle;
    const point = findNearestFloorPosition(
      clampToMapX(center.x + Math.cos(angle) * ringRadius, spawnRadius),
      clampToMapY(center.y + Math.sin(angle) * ringRadius, spawnRadius),
      spawnRadius,
    );
    const monster = createMonster(
      speciesName,
      point.x,
      point.y,
      Math.cos(angle) >= 0 ? 1 : -1,
      tierIndex,
    );
    monster.anchorX = point.x;
    monster.anchorY = point.y;
    state.monsters.push(monster);
    spawnedCount += 1;
  }

  authorMessage.textContent = `已生成 ${TIERS[tierIndex].name} ${getMonsterDisplayName(speciesName)} x${spawnedCount}`;
}

function openAuthorPanel() {
  if (!state.spawned) return;

  closeFloatingPanels();
  authorPanel.classList.remove("is-hidden");
  state.uiLockMovement = true;
  populateAuthorControls();
  drawAuthorMapPreview();
  updateAuthorPanelUi();
  if (!state.author.verified) {
    authorNameInput.focus();
  }
}

function verifyAuthorAccess() {
  const text = getCurrentText();
  const name = authorNameInput.value.trim();
  const birthday = authorBirthdayInput.value.trim().replace(/\s+/g, "");
  const normalizedBirthday = birthday
    .replace("日", "")
    .replace("月", ".")
    .replace("/", ".")
    .replace(/^0+/, "")
    .replace(".0", ".");

  if (name === "张高远" && (normalizedBirthday === "1.25" || birthday === "1月25")) {
    state.author.verified = true;
    state.author.hasSelection = false;
    authorMessage.textContent = text.authorReady;
    drawAuthorMapPreview();
    updateAuthorPanelUi();
    return;
  }

  authorMessage.textContent = text.authorWrong;
}

function selectAuthorTeleportPoint(event) {
  if (!state.author.verified) return;

  const rect = authorMapPreview.getBoundingClientRect();
  const ratioX = clamp((event.clientX - rect.left) / rect.width, 0, 1);
  const ratioY = clamp((event.clientY - rect.top) / rect.height, 0, 1);
  const targetX = ratioX * MAP_WIDTH - MAP_HALF_WIDTH;
  const targetY = ratioY * MAP_HEIGHT - MAP_HALF_HEIGHT;
  const floorPoint = findNearestFloorPosition(targetX, targetY, state.player.hitRadius);

  state.author.selectedX = floorPoint.x;
  state.author.selectedY = floorPoint.y;
  state.author.hasSelection = true;
  updateAuthorPanelUi();
}

function pushMonsterAwayFromPoint(monster, originX, originY) {
  if (monster.hidden || monster.dying || !monster.alive) return;

  const dx = monster.x - originX;
  const dy = monster.y - originY;
  const distance = Math.hypot(dx, dy);
  const safeDistance = AUTHOR_TELEPORT_PUSH_RADIUS + monster.radius;
  if (distance >= safeDistance) return;

  const fallbackAngle = wallTextureHash(
    Math.round(monster.x * 0.1) + monster.tierIndex * 17,
    Math.round(monster.y * 0.1) - monster.tierIndex * 11,
    8.4,
  ) * Math.PI * 2;
  const angle = distance > 1 ? Math.atan2(dy, dx) : fallbackAngle;
  let remaining = safeDistance - distance;

  while (remaining > 0) {
    const step = Math.min(AUTHOR_TELEPORT_PUSH_STEP, remaining);
    const previousX = monster.x;
    const previousY = monster.y;
    const moved = moveCircleEntityWithMapCollision(
      monster,
      monster.x + Math.cos(angle) * step,
      monster.y + Math.sin(angle) * step,
      monster.radius,
      MONSTER_COLLISION_SAMPLE_COUNT,
    );

    clampEntityToMap(monster, monster.radius);
    if (!moved || Math.hypot(monster.x - previousX, monster.y - previousY) < 0.5) break;
    remaining -= step;
  }

  monster.anchorX = monster.x;
  monster.anchorY = monster.y;
  monster.targetMoveAngle = angle;
  monster.moveAngle = angle;
}

function pushMonstersAwayFromAuthorTeleport(x, y) {
  for (const monster of state.monsters) {
    pushMonsterAwayFromPoint(monster, x, y);
  }
}

function teleportToAuthorPoint() {
  if (!state.author.verified || !state.author.hasSelection) {
    authorMessage.textContent = getCurrentText().authorPickPoint;
    return;
  }

  const floorPoint = findNearestFloorPosition(
    state.author.selectedX,
    state.author.selectedY,
    state.player.hitRadius,
  );
  state.player.x = floorPoint.x;
  state.player.y = floorPoint.y;
  state.camera.x = floorPoint.x;
  state.camera.y = floorPoint.y;
  state.camera.freeX = floorPoint.x;
  state.camera.freeY = floorPoint.y;
  state.player.invulnerableUntil = performance.now() + AUTHOR_TELEPORT_INVULNERABLE_MS;
  pushMonstersAwayFromAuthorTeleport(floorPoint.x, floorPoint.y);
  updatePointerWorld();
  closeFloatingPanels();
}

function isTextEntryTarget(target) {
  const tagName = target?.tagName;
  return tagName === "INPUT" || tagName === "TEXTAREA" || target?.isContentEditable;
}

function handleAuthorCodeKey(event) {
  if (!state.spawned || isTextEntryTarget(event.target)) return;
  if (event.key.length !== 1) return;

  state.author.codeBuffer = `${state.author.codeBuffer}${event.key.toLowerCase()}`.slice(-8);
  if (state.author.codeBuffer === "haoshuai") {
    event.preventDefault();
    openAuthorPanel();
  }
}

function isBlockedBrowserShortcut(event) {
  const key = event.key.toLowerCase();

  return (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && (key === "i" || key === "j" || key === "c")) ||
    (event.metaKey && event.altKey && (key === "i" || key === "j" || key === "c")) ||
    (event.ctrlKey && key === "u") ||
    (event.metaKey && event.altKey && key === "u")
  );
}

function getAccountText() {
  return getCurrentText();
}

function normalizeAccountName(name) {
  return name.trim().slice(0, 16);
}

function getAccountKey(name, password) {
  return JSON.stringify([normalizeAccountName(name), password]);
}

function getAccountNameFromKey(key) {
  try {
    const parsed = JSON.parse(key);
    if (Array.isArray(parsed) && typeof parsed[0] === "string") return parsed[0];
  } catch {
    // Older saves used the plain name as the key.
  }
  return key;
}

function normalizeAccountStore(accounts) {
  const normalized = {};

  Object.entries(accounts || {}).forEach(([key, account]) => {
    if (!account) return;
    const name = normalizeAccountName(account.name || getAccountNameFromKey(key));
    const password = account.password || "";
    const accountKey = password ? getAccountKey(name, password) : key;
    const normalizedAccount = {
      ...account,
      name,
      password,
    };

    if (
      !normalized[accountKey] ||
      getAccountSavedAt(normalizedAccount) >= getAccountSavedAt(normalized[accountKey])
    ) {
      normalized[accountKey] = normalizedAccount;
    }
  });

  return normalized;
}

function readLocalStorageJson(key, fallbackValue = {}) {
  try {
    return JSON.parse(window.localStorage.getItem(key) || JSON.stringify(fallbackValue));
  } catch {
    return fallbackValue;
  }
}

function writeLocalStorageJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Local storage can be unavailable in private or restricted browsing.
  }
}

function getAccountSavedAt(account) {
  return account?.saveData?.savedAt || account?.updatedAt || account?.createdAt || 0;
}

function mergeAccountStores(primaryAccounts, backupAccounts) {
  const merged = normalizeAccountStore(backupAccounts);

  Object.entries(normalizeAccountStore(primaryAccounts)).forEach(([accountKey, account]) => {
    if (!merged[accountKey] || getAccountSavedAt(account) >= getAccountSavedAt(merged[accountKey])) {
      merged[accountKey] = account;
    }
  });

  return merged;
}

function readLocalAccountBackups() {
  return readLocalStorageJson(ACCOUNT_BACKUP_STORAGE_KEY, {});
}

function writeLocalAccountBackup(accountKey, account) {
  if (!accountKey || !account) return;

  const backups = readLocalAccountBackups();
  backups[accountKey] = {
    ...account,
    localBackupAt: Date.now(),
  };
  writeLocalStorageJson(ACCOUNT_BACKUP_STORAGE_KEY, backups);
  writeLocalStorageJson(ACCOUNT_LAST_LOCAL_KEY, {
    accountKey,
    name: account.name || getAccountNameFromKey(accountKey),
    password: account.password,
    saveData: account.saveData,
    savedAt: Date.now(),
  });
}

function readAccounts() {
  return mergeAccountStores(
    readLocalStorageJson(ACCOUNT_STORAGE_KEY, {}),
    readLocalAccountBackups(),
  );
}

function writeAccounts(accounts) {
  writeLocalStorageJson(ACCOUNT_STORAGE_KEY, accounts);
  writeLocalStorageJson(ACCOUNT_BACKUP_STORAGE_KEY, {
    ...readLocalAccountBackups(),
    ...accounts,
  });
}

function syncAccountBackups() {
  const accounts = readAccounts();
  if (Object.keys(accounts).length > 0) {
    writeAccounts(accounts);
  }
}

function getCurrentLeaderboardKey() {
  return state.accountName || "__current_player__";
}

function getLeaderboardEntries() {
  const accounts = readAccounts();
  const entriesByKey = new Map();

  Object.entries(accounts).forEach(([accountKey, account]) => {
    const level = Math.max(1, Math.floor(account?.saveData?.player?.level || 1));
    entriesByKey.set(accountKey, {
      key: accountKey,
      name: account?.name || getAccountNameFromKey(accountKey) || getCurrentText().defaultPlayerName,
      level,
    });
  });

  entriesByKey.set(getCurrentLeaderboardKey(), {
    key: getCurrentLeaderboardKey(),
    name: state.player.name || nameInput.value || getCurrentText().defaultPlayerName,
    level: Math.max(1, Math.floor(state.player.level || 1)),
  });

  return [...entriesByKey.values()]
    .filter((entry) => entry.level >= LEADERBOARD_MIN_LEVEL)
    .sort((a, b) => b.level - a.level || a.name.localeCompare(b.name));
}

function isCurrentPlayerLeaderboardChampion(entries = getLeaderboardEntries()) {
  return entries[0]?.key === getCurrentLeaderboardKey();
}

function isLeaderboardRewardPetal(item) {
  return Boolean(item?.temporary && item?.rewardSource === "leaderboard");
}

function removeLeaderboardRewardPetals() {
  let removed = false;
  state.inventory = state.inventory.filter((item) => {
    if (!isLeaderboardRewardPetal(item)) return true;
    removed = true;
    return false;
  });
  state.weapon.petals = state.weapon.petals.map((item) => {
    if (!isLeaderboardRewardPetal(item)) return item;
    removed = true;
    return null;
  });
  state.weapon.secondaryPetals = state.weapon.secondaryPetals.map((item) => {
    if (!isLeaderboardRewardPetal(item)) return item;
    removed = true;
    return null;
  });
  if (removed) {
    state.leaderboardRewardPetal = null;
    renderItemUi();
  }
  return removed;
}

function hasLeaderboardRewardPetal() {
  return (
    state.inventory.some(isLeaderboardRewardPetal) ||
    state.weapon.petals.some(isLeaderboardRewardPetal) ||
    state.weapon.secondaryPetals.some(isLeaderboardRewardPetal)
  );
}

function syncLeaderboardReward(entries = getLeaderboardEntries()) {
  if (!state.spawned || !isCurrentPlayerLeaderboardChampion(entries)) {
    removeLeaderboardRewardPetals();
    return;
  }

  if (!hasLeaderboardRewardPetal()) {
    const reward = createPetalItem(
      "ThunderHammer",
      THUNDER_HAMMER_LEADERBOARD_TIER_NUMBER - 1,
    );
    reward.temporary = true;
    reward.rewardSource = "leaderboard";
    state.inventory.push(reward);
    state.leaderboardRewardPetal = reward;
    sortInventory();
    renderItemUi();
  }
}

function renderLeaderboardUi(entries = getLeaderboardEntries()) {
  if (!leaderboardList) return;

  const text = getCurrentText();
  leaderboardList.innerHTML = "";
  if (entries.length === 0) {
    const empty = document.createElement("div");
    empty.className = "leaderboard-empty";
    empty.textContent = text.leaderboardEmpty;
    leaderboardList.append(empty);
    return;
  }

  entries.forEach((entry, index) => {
    const row = document.createElement("div");
    row.className = "leaderboard-row";
    row.classList.toggle("is-current", entry.key === getCurrentLeaderboardKey());

    const rank = document.createElement("span");
    rank.className = "leaderboard-rank";
    rank.textContent = `#${index + 1}`;

    const name = document.createElement("span");
    name.className = "leaderboard-name";
    name.textContent = entry.name;

    const level = document.createElement("b");
    level.className = "leaderboard-level";
    level.textContent = `Lv.${entry.level}`;

    row.append(rank, name, level);
    leaderboardList.append(row);
  });
}

function updateLeaderboard(time, force = false) {
  if (!force && time < state.lastLeaderboardRenderAt + 500) return;

  const entries = getLeaderboardEntries();
  state.lastLeaderboardRenderAt = time;
  syncLeaderboardReward(entries);
  renderLeaderboardUi(entries);
}

function setAccountMessage(messageKeyOrText) {
  const text = getAccountText();
  accountMessage.textContent = text[messageKeyOrText] || messageKeyOrText || "";
}

function openAccountPanel(messageKey = "") {
  closeFloatingPanels();
  accountPanel.classList.remove("is-hidden");
  accountButton.classList.add("is-active");
  if (!loginNameInput.value.trim()) loginNameInput.value = nameInput.value.trim();
  if (!registerNameInput.value.trim()) registerNameInput.value = nameInput.value.trim();
  setAccountMessage(messageKey);
  state.uiLockMovement = true;
}

function openMonsterDexPanel() {
  closeFloatingPanels();
  renderMonsterDexUi();
  monsterDexPanel.classList.remove("is-hidden");
  monsterDexButton.classList.add("is-active");
  state.uiLockMovement = true;
}

function openPetalDexPanel() {
  closeFloatingPanels();
  renderPetalDexUi();
  petalDexPanel.classList.remove("is-hidden");
  petalDexButton.classList.add("is-active");
  state.uiLockMovement = true;
}

function saveActiveAccount() {
  if (!state.accountName) return;

  const accounts = readAccounts();
  const account = accounts[state.accountName];
  if (!account) return;

  accounts[state.accountName] = {
    ...account,
    saveData: createSaveData(),
    updatedAt: Date.now(),
  };
  writeAccounts(accounts);
  writeLocalAccountBackup(state.accountName, accounts[state.accountName]);
}

function loginAccount() {
  const name = normalizeAccountName(loginNameInput.value);
  const password = loginPasswordInput.value;
  const accounts = readAccounts();
  const accountKey = getAccountKey(name, password);
  const account = accounts[accountKey];

  if (!name || !password) {
    setAccountMessage("accountMissingFields");
    return;
  }
  if (!account) {
    const hasSameName = Object.values(accounts).some((entry) => entry?.name === name);
    setAccountMessage(hasSameName ? "accountWrongPassword" : "accountNotFound");
    return;
  }

  state.accountName = "";
  applySaveData(account.saveData);
  state.accountName = accountKey;
  state.player.name = name;
  nameInput.value = name;
  setAccountMessage("accountLoginSuccess");
  renderItemUi();
  renderTalentUi();
  updateLeaderboard(performance.now(), true);
  closeFloatingPanels();
  saveActiveAccount();
  writeLocalAccountBackup(accountKey, readAccounts()[accountKey]);
}

function registerAccount() {
  const name = normalizeAccountName(registerNameInput.value || nameInput.value);
  const password = registerPasswordInput.value;
  const confirmPassword = registerPasswordConfirmInput.value;
  const accounts = readAccounts();
  const accountKey = getAccountKey(name, password);

  if (!name || !password) {
    setAccountMessage("accountMissingFields");
    return;
  }
  if (password !== confirmPassword) {
    setAccountMessage("accountPasswordMismatch");
    return;
  }
  if (accounts[accountKey]) {
    setAccountMessage("accountExists");
    return;
  }

  state.accountName = accountKey;
  state.player.name = name;
  nameInput.value = name;
  accounts[accountKey] = {
    name,
    password,
    saveData: createSaveData(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  writeAccounts(accounts);
  writeLocalAccountBackup(accountKey, accounts[accountKey]);
  setAccountMessage("accountRegisterSuccess");
  renderItemUi();
  renderTalentUi();
  updateLeaderboard(performance.now(), true);
  closeFloatingPanels();
}

function getTalentLevel(id) {
  return state.player.talents[id] || 0;
}

function getEffectiveEquipmentSlots() {
  return BASE_EQUIPMENT_SLOTS + getTalentLevel("equipmentSlots");
}

function getBaseMaxHealthForLevel(level) {
  const targetLevel = Math.max(1, Math.floor(level || 1));
  let baseMaxHealth = BASE_PLAYER_MAX_HEALTH;

  for (let currentLevel = 1; currentLevel < targetLevel; currentLevel++) {
    baseMaxHealth = Math.round(baseMaxHealth * getPlayerHealthGrowthMultiplier(currentLevel));
  }

  return baseMaxHealth;
}

function ensurePlayerBaseMaxHealthForLevel() {
  state.player.baseMaxHealth = Math.max(
    state.player.baseMaxHealth || BASE_PLAYER_MAX_HEALTH,
    getBaseMaxHealthForLevel(state.player.level),
  );
}

function getPlayerMaxHealth() {
  ensurePlayerBaseMaxHealthForLevel();
  return Math.round(state.player.baseMaxHealth * (1 + getTalentLevel("maxHealth") * 0.08));
}

function getViewScale() {
  return 1 / (1 + getTalentLevel("vision") * 0.04);
}

function getPetalCooldownMs(petal = null) {
  const baseRespawnMs = petal?.baseRespawnMs || PETAL_BASE_RESPAWN_MS;
  return Math.max(80, baseRespawnMs * (1 - getTalentLevel("petalRefresh") * 0.07));
}

function getDropMagnetRadius() {
  const level = getTalentLevel("magnet");
  if (level <= 0) return 0;
  return 180 + level * 95;
}

function getPlayerRegenPerSecond() {
  return state.player.maxHealth * getTalentLevel("regen") * 0.006;
}

function getPlayerBodyDamage() {
  return Math.round(
    BASE_PLAYER_BODY_DAMAGE * (1 + getTalentLevel("bodyDamage") * PLAYER_BODY_DAMAGE_TALENT_BONUS),
  );
}

function getPetalSpinSpeed() {
  return 2.45 + getTalentLevel("petalSpeed") * 0.24;
}

function getPetalAttackRangeMultiplier() {
  return 1 + getTalentLevel("attackRange") * 0.06;
}

function getPetalOrbitRadius(baseRadius) {
  return baseRadius * getPetalAttackRangeMultiplier();
}

function getPetalDurabilityMultiplier() {
  return 1 + getTalentLevel("petalDurability") * 0.18;
}

function getPlayerSpeedMultiplier() {
  return 1 + getTalentLevel("moveSpeed") * 0.045;
}

function getPlayerMoveSpeed() {
  return state.player.speed * getPlayerSpeedMultiplier();
}

function getExtraDropChance() {
  return Math.min(0.72, getTalentLevel("extraDrop") * 0.055);
}

function getExperienceMultiplier() {
  return 1 + getTalentLevel("experience") * 0.08;
}

function getDamageReductionMultiplier() {
  return Math.max(0.48, 1 - getTalentLevel("damageReduction") * 0.045);
}

function getCraftChanceMultiplier() {
  return 1 + getTalentLevel("craftChance") * 0.05;
}

function getTalentSpentPoints() {
  return TALENT_DEFINITIONS.reduce(
    (total, talent) => total + getTalentCumulativeCost(getTalentLevel(talent.id)),
    0,
  );
}

function getTalentLevelCost(level) {
  return Math.max(0, level);
}

function getTalentCumulativeCost(level) {
  const clampedLevel = Math.max(0, Math.floor(level));
  return (clampedLevel * (clampedLevel + 1)) / 2;
}

function refreshPlayerMaxHealth({ addDifference = false } = {}) {
  const previousMaxHealth = state.player.maxHealth;
  state.player.maxHealth = getPlayerMaxHealth();
  const maxHealthDifference = state.player.maxHealth - previousMaxHealth;
  if (addDifference && maxHealthDifference > 0) {
    state.player.health = Math.min(
      state.player.maxHealth,
      state.player.health + maxHealthDifference,
    );
  } else {
    state.player.health = Math.min(state.player.health, state.player.maxHealth);
  }
}

function refreshPetalDurability() {
  for (const item of [...state.weapon.petals, ...state.weapon.secondaryPetals, ...state.inventory]) {
    if (!item) continue;
    ensureLightOrbStates(item);
    const orbRatios = item.name === "Light"
      ? item.orbs.map((orb) => (item.maxDurability ? orb.durability / item.maxDurability : 1))
      : [];
    const ratio = item.maxDurability ? item.durability / item.maxDurability : 1;
    const baseMaxDurability = getPetalBaseMaxDurability(item.name, item.tierIndex);
    item.baseMaxDurability = baseMaxDurability;
    if (item.fixedDurability) {
      item.maxDurability = baseMaxDurability;
      item.durability = Math.max(1, Math.min(item.maxDurability, Math.round(item.maxDurability * ratio)));
      continue;
    }
    item.maxDurability = Math.max(1, Math.round(baseMaxDurability * getPetalDurabilityMultiplier()));
    if (item.name === "Light") {
      ensureLightOrbStates(item);
      item.orbs.forEach((orb, index) => {
        const orbRatio = orbRatios[index] ?? ratio;
        orb.durability = orb.active
          ? Math.max(1, Math.min(item.maxDurability, Math.round(item.maxDurability * orbRatio)))
          : 0;
      });
      syncPetalActiveState(item);
      continue;
    }
    item.durability = Math.max(1, Math.min(item.maxDurability, Math.round(item.maxDurability * ratio)));
  }
}

function applyTalentEffects({ addHealthDifference = false } = {}) {
  refreshPlayerMaxHealth({ addDifference: addHealthDifference });
  refreshPetalDurability();
  state.weapon.count = getEffectiveEquipmentSlots();
  while (state.weapon.petals.length < MAX_EQUIPMENT_SLOTS) state.weapon.petals.push(null);
  while (state.weapon.secondaryPetals.length < MAX_EQUIPMENT_SLOTS) state.weapon.secondaryPetals.push(null);
  for (let index = state.weapon.count; index < state.weapon.petals.length; index++) {
    if (state.weapon.petals[index]) {
      state.inventory.push(state.weapon.petals[index]);
      state.weapon.petals[index] = null;
    }
  }
  for (let index = state.weapon.count; index < state.weapon.secondaryPetals.length; index++) {
    if (state.weapon.secondaryPetals[index]) {
      state.inventory.push(state.weapon.secondaryPetals[index]);
      state.weapon.secondaryPetals[index] = null;
    }
  }
  sortInventory();
  renderItemUi();
}

function grantTalentPoint() {
  if (state.player.earnedTalentPoints >= MAX_TALENT_POINTS) return;

  const targetEarnedPoints = Math.min(
    MAX_TALENT_POINTS,
    Math.max(0, state.player.level) + Math.floor(state.player.level / 10) * 10,
  );
  const gainedPoints = targetEarnedPoints - state.player.earnedTalentPoints;
  if (gainedPoints <= 0) return;

  state.player.earnedTalentPoints += gainedPoints;
  state.player.talentPoints += gainedPoints;
}

function setTalentLevel(talentId, targetLevel) {
  const talent = TALENT_DEFINITIONS.find((entry) => entry.id === talentId);
  if (!talent) return;

  const currentLevel = getTalentLevel(talentId);
  const clampedTarget = clamp(targetLevel, 0, talent.maxLevel);
  let nextLevel = clampedTarget;

  if (currentLevel === clampedTarget && clampedTarget > 0) {
    nextLevel = clampedTarget - 1;
  }

  const delta = getTalentCumulativeCost(nextLevel) - getTalentCumulativeCost(currentLevel);
  if (delta > state.player.talentPoints) return;

  state.player.talents[talentId] = nextLevel;
  state.player.talentPoints -= delta;
  applyTalentEffects({ addHealthDifference: true });
  renderTalentUi();
  saveActiveAccount();
}

function renderTalentUi() {
  if (!talentGrid) return;

  const text = getCurrentText();
  talentPointsLabel.textContent = `${text.talentPoints}: ${state.player.talentPoints}`;
  if (talentStatsLabel) {
    talentStatsLabel.textContent = `${text.talentMaxHealthStat}: ${formatPetalStat(
      state.player.maxHealth,
    )}  ${text.talentBodyDamageStat}: ${formatPetalStat(getPlayerBodyDamage())}`;
  }
  talentGrid.innerHTML = "";

  for (const talent of TALENT_DEFINITIONS) {
    const row = document.createElement("div");
    row.className = "talent-row";

    const label = document.createElement("div");
    label.className = "talent-name";
    label.textContent = text[talent.labelKey] || talent.id;

    const levels = document.createElement("div");
    levels.className = "talent-levels";

    for (let level = 1; level <= talent.maxLevel; level++) {
      const button = document.createElement("button");
      button.className = "talent-node";
      button.type = "button";
      button.textContent = `${level}`;
      button.title = `${level} / ${getTalentLevelCost(level)}`;
      button.setAttribute("aria-label", `${label.textContent} ${level}, ${getTalentLevelCost(level)}`);
      button.classList.toggle("is-learned", getTalentLevel(talent.id) >= level);
      button.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        window.clearTimeout(talentHoldTimer);
        talentHoldTimer = window.setTimeout(() => setTalentLevel(talent.id, level), 450);
      });
      button.addEventListener("pointerup", () => window.clearTimeout(talentHoldTimer));
      button.addEventListener("pointerleave", () => window.clearTimeout(talentHoldTimer));
      levels.append(button);
    }

    row.append(label, levels);
    talentGrid.append(row);
  }
}

let musicContext = null;
let musicNodes = null;

function startMusic() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext || musicNodes) return;

  musicContext = musicContext || new AudioContext();
  musicContext.resume?.();
  const master = musicContext.createGain();
  const notes = [261.63, 329.63, 392, 523.25, 440, 392, 329.63, 293.66];
  let step = 0;

  master.gain.value = 0.045;
  master.connect(musicContext.destination);

  const playNote = () => {
    const now = musicContext.currentTime;
    const noteGain = musicContext.createGain();
    const lead = musicContext.createOscillator();
    const bass = musicContext.createOscillator();
    const frequency = notes[step % notes.length];

    lead.type = "triangle";
    bass.type = "sine";
    lead.frequency.setValueAtTime(frequency, now);
    bass.frequency.setValueAtTime(frequency / 2, now);
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.45, now + 0.025);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
    lead.connect(noteGain);
    bass.connect(noteGain);
    noteGain.connect(master);
    lead.start(now);
    bass.start(now);
    lead.stop(now + 0.44);
    bass.stop(now + 0.44);
    step += 1;
  };

  playNote();
  musicNodes = { master, interval: window.setInterval(playNote, 360) };
}

function stopMusic() {
  if (!musicNodes) return;
  window.clearInterval(musicNodes.interval);
  musicNodes.master.disconnect();
  musicNodes = null;
}

function ensureMusicPlaying() {
  if (!state.settings.music) return;
  if (!musicNodes) {
    startMusic();
    return;
  }
  if (musicContext?.state === "suspended") {
    musicContext.resume?.();
  }
}

function setMusicEnabled(enabled) {
  state.settings.music = enabled;
  if (enabled) {
    startMusic();
    ensureMusicPlaying();
  } else {
    stopMusic();
  }
  syncSettingsUi();
}

function setJoystickPosition(clientX, clientY) {
  const maxDistance = joystick.offsetWidth * 0.34;
  const centerX = state.input.joystickOriginX;
  const centerY = state.input.joystickOriginY;
  const dx = clientX - centerX;
  const dy = clientY - centerY;
  const distance = Math.hypot(dx, dy);
  const clampedDistance = Math.min(maxDistance, distance);
  const angle = Math.atan2(dy, dx);
  const knobX = Math.cos(angle) * clampedDistance;
  const knobY = Math.sin(angle) * clampedDistance;

  state.input.joystickX = maxDistance > 0 ? knobX / maxDistance : 0;
  state.input.joystickY = maxDistance > 0 ? knobY / maxDistance : 0;
  joystickKnob.style.transform = `translate(calc(-50% + ${knobX}px), calc(-50% + ${knobY}px))`;
}

function startJoystick(pointerId, clientX, clientY) {
  state.input.joystickPointerId = pointerId;
  state.input.joystickOriginX = clientX;
  state.input.joystickOriginY = clientY;
  joystick.style.left = `${clientX}px`;
  joystick.style.top = `${clientY}px`;
  joystick.classList.add("is-active");
  setJoystickPosition(clientX, clientY);
}

function resetJoystick() {
  state.input.joystickPointerId = null;
  state.input.joystickX = 0;
  state.input.joystickY = 0;
  joystick.classList.remove("is-active");
  joystickKnob.style.transform = "translate(-50%, -50%)";
}

function setInputAction(action, pressed) {
  const wasPressed = state.input[action];
  state.input[action] = pressed;
  if (action === "attack" && pressed && !wasPressed) placePollenPetalsFromAttack();
  if (action === "defend" && pressed && !wasPressed) placePollenPetals();
  syncCombatControls();
}

function damageCreature(creature, amount, time) {
  if (creature.hidden || creature.dying || !creature.alive) return false;
  if (creature === state.player && time < state.player.invulnerableUntil) return false;

  const finalAmount = creature === state.player ? amount * getDamageReductionMultiplier() : amount;
  creature.health = Math.max(0, creature.health - finalAmount);
  creature.hitFlash = HIT_FLASH_SECONDS;

  if (creature.health <= 0) {
    creature.alive = false;
    creature.dying = true;
    creature.deathStartedAt = time;
    creature.hitFlash = 0;
  }

  return true;
}

function addDamageNumber(monster, amount, time) {
  if (!state.settings.showDamageNumbers) return;

  if (!monster.damageNumberId || time > (monster.damageNumberWindowUntil || 0)) {
    monster.damageNumberId = nextDamageNumberId++;
    monster.damageNumberTotal = 0;
    monster.damageNumberWindowUntil = time + DAMAGE_NUMBER_WINDOW_MS;
  }

  monster.damageNumberTotal += amount;
  const existing = state.damageNumbers.find((number) => number.id === monster.damageNumberId);
  const damageNumber = existing || {
    id: monster.damageNumberId,
    x: monster.x,
    y: monster.y - monster.height * 0.45,
    startedAt: time,
    expiresAt: time + DAMAGE_NUMBER_DURATION_MS,
    value: 0,
  };

  damageNumber.value = Math.round(monster.damageNumberTotal);
  damageNumber.x = monster.x;
  damageNumber.y = monster.y - monster.height * 0.45;
  damageNumber.startedAt = time;
  damageNumber.expiresAt = time + DAMAGE_NUMBER_DURATION_MS;

  if (!existing) state.damageNumbers.push(damageNumber);
}

function getPlayerHealthGrowthMultiplier(currentLevel) {
  if (currentLevel < 3) return 1.64;
  if (currentLevel < 12) return 1.13;
  if (currentLevel < 30) return 1.062;
  if (currentLevel < 50) return 1.056;
  if (currentLevel < 85) return 1.031;
  if (currentLevel < 100) return 1.012;
  if (currentLevel < 140) return 1.02;
  if (currentLevel < 185) return 1.012;
  if (currentLevel < 240) return 1.009;
  if (currentLevel < 300) return 1.012;
  return 1.001;
}

function levelUpPlayer() {
  const previousMaxHealth = state.player.maxHealth;
  const multiplier = getPlayerHealthGrowthMultiplier(state.player.level);

  state.player.level += 1;
  state.player.baseMaxHealth = Math.round(state.player.baseMaxHealth * multiplier);
  grantTalentPoint();
  refreshPlayerMaxHealth();
  state.player.health = Math.min(
    state.player.maxHealth,
    state.player.health + (state.player.maxHealth - previousMaxHealth),
  );
  state.player.nextExperience = getNextExperienceForLevel(state.player.level);
  renderTalentUi();
}

function addPlayerExperience(amount) {
  state.player.experience += amount * getExperienceMultiplier();

  while (state.player.experience >= state.player.nextExperience) {
    state.player.experience -= state.player.nextExperience;
    levelUpPlayer();
  }
  saveActiveAccount();
}

function getDirectionalMovementVector() {
  if (usesTouchControls()) {
    return { x: state.input.joystickX, y: state.input.joystickY };
  }

  if (state.settings.movement !== "wasd") {
    return { x: 0, y: 0 };
  }

  const x = Number(state.input.right) - Number(state.input.left);
  const y = Number(state.input.down) - Number(state.input.up);
  const length = Math.hypot(x, y);

  if (length === 0) return { x: 0, y: 0 };

  return { x: x / length, y: y / length };
}

function updateDistantMonster(monster, dt, time) {
  if (monster.stationary) {
    monster.speed = 0;
    return;
  }

  if (time < (monster.nextFarUpdateAt || 0)) return;

  monster.nextFarUpdateAt = time + MONSTER_FAR_UPDATE_MS + Math.random() * 360;
  monster.moveAngle = lerpAngle(monster.moveAngle, monster.targetMoveAngle, Math.min(1, dt * 1.4));
  monster.faceAngle = lerpAngle(monster.faceAngle, monster.moveAngle + Math.PI / 2, Math.min(1, dt * 4));

  if (time >= monster.nextDecisionAt) {
    if (isMonsterChasingPlayer(monster, time)) {
      monster.targetMoveAngle = Math.atan2(state.player.y - monster.y, state.player.x - monster.x);
      monster.targetSpeed = 92 + monster.tierIndex * 5;
      monster.nextDecisionAt = time + 180;
      return;
    }

    const routeProgress = getRouteProgressForWorld(monster.x, monster.y);
    const tierRange = getMonsterTierProgressRange(monster.tierIndex);
    const targetProgress = clamp(
      routeProgress + (Math.random() - 0.5) * 0.018,
      tierRange.min,
      tierRange.max,
    );
    const target = getRouteWorldPosition(targetProgress, (Math.random() * 2 - 1) * 2.5);
    monster.targetMoveAngle = Math.atan2(target.y - monster.y, target.x - monster.x);
    monster.nextDecisionAt = time + 1800 + Math.random() * 1700;
  }
}

function updateMonsters(dt, time) {
  if (!state.spawned) return;

  const simulationBounds = getWorldViewportBounds(MONSTER_FULL_SIMULATE_MARGIN);

  for (const monster of state.monsters) {
    updateCreatureEffects(monster, dt, time);
    if (monster.hidden || monster.dying) continue;
    if (!monster.alive) continue;
    if (monster.stationary) {
      monster.speed = 0;
      continue;
    }

    if (!shouldFullySimulateMonster(monster, simulationBounds)) {
      updateDistantMonster(monster, dt, time);
      continue;
    }

    if (time >= monster.nextDecisionAt) {
      const anchorDx = monster.anchorX - monster.x;
      const anchorDy = monster.anchorY - monster.y;
      const anchorDistance = Math.hypot(anchorDx, anchorDy);
      const routeProgress = getRouteProgressForWorld(monster.x, monster.y);
      const tierRange = getMonsterTierProgressRange(monster.tierIndex);
      const nearMapEdge =
        Math.abs(monster.x) > MAP_HALF_WIDTH - 180 ||
        Math.abs(monster.y) > MAP_HALF_HEIGHT - 180;

      const isChasing = isMonsterChasingPlayer(monster, time);
      if (isChasing) {
        monster.targetMoveAngle = Math.atan2(state.player.y - monster.y, state.player.x - monster.x);
        monster.targetSpeed = 96 + monster.tierIndex * 5;
      } else if (routeProgress < tierRange.min || routeProgress > tierRange.max) {
        const target = getRouteWorldPosition((tierRange.min + tierRange.max) / 2, 0);
        monster.targetMoveAngle =
          Math.atan2(target.y - monster.y, target.x - monster.x) + (Math.random() - 0.5) * 0.45;
      } else if (nearMapEdge) {
        const target = getRouteWorldPosition(routeProgress, 0);
        monster.targetMoveAngle = Math.atan2(target.y - monster.y, target.x - monster.x);
      } else if (anchorDistance > MONSTER_ROAM_RADIUS) {
        monster.targetMoveAngle = Math.atan2(anchorDy, anchorDx) + (Math.random() - 0.5) * 0.9;
      } else {
        monster.targetMoveAngle = Math.random() * Math.PI * 2;
      }
      if (isChasing) {
        monster.nextDecisionAt = time + 120;
      } else {
        monster.targetSpeed = 16 + Math.random() * 40;
        monster.nextDecisionAt = time + 360 + Math.random() * 1200;
      }
    }

    monster.speed += (monster.targetSpeed - monster.speed) * Math.min(1, dt * 5);
    monster.moveAngle = lerpAngle(monster.moveAngle, monster.targetMoveAngle, Math.min(1, dt * 4));
    const nextX = monster.x + Math.cos(monster.moveAngle) * monster.speed * dt;
    const nextY = monster.y + Math.sin(monster.moveAngle) * monster.speed * dt;
    const moved = moveCircleEntityWithMapCollision(
      monster,
      nextX,
      nextY,
      monster.radius,
      MONSTER_COLLISION_SAMPLE_COUNT,
    );
    if (!moved) {
      monster.targetMoveAngle = Math.atan2(-Math.sin(monster.moveAngle), -Math.cos(monster.moveAngle));
    }
    const beforeClampX = monster.x;
    const beforeClampY = monster.y;
    clampEntityToMap(monster, monster.radius);
    if (monster.x !== beforeClampX || monster.y !== beforeClampY) {
      const target = getRouteWorldPosition(getRouteProgressForWorld(monster.x, monster.y), 0);
      monster.targetMoveAngle = Math.atan2(target.y - monster.y, target.x - monster.x);
      monster.anchorX = monster.x;
      monster.anchorY = monster.y;
    }
    monster.direction = Math.cos(monster.moveAngle) >= 0 ? 1 : -1;
    const targetFaceAngle = monster.moveAngle + Math.PI / 2;
    monster.faceAngle = lerpAngle(monster.faceAngle, targetFaceAngle, Math.min(1, dt * 12));
  }
}

function resolveMonsterCollisions() {
  if (!state.spawned) return;

  const simulationBounds = getWorldViewportBounds(MONSTER_FULL_SIMULATE_MARGIN);

  for (let pass = 0; pass < 2; pass++) {
    const collisionCells = new Map();
    const activeMonsters = state.monsters.filter(
      (monster) =>
        !monster.hidden &&
        !monster.dying &&
        monster.alive &&
        shouldFullySimulateMonster(monster, simulationBounds),
    );

    activeMonsters.forEach((monster, index) => {
      const cellX = Math.floor(monster.x / MONSTER_COLLISION_CELL_SIZE);
      const cellY = Math.floor(monster.y / MONSTER_COLLISION_CELL_SIZE);
      const key = `${cellX}:${cellY}`;

      if (!collisionCells.has(key)) collisionCells.set(key, []);
      collisionCells.get(key).push(index);
    });

    for (let i = 0; i < activeMonsters.length; i++) {
      const a = activeMonsters[i];
      const cellX = Math.floor(a.x / MONSTER_COLLISION_CELL_SIZE);
      const cellY = Math.floor(a.y / MONSTER_COLLISION_CELL_SIZE);

      for (let offsetY = -1; offsetY <= 1; offsetY++) {
        for (let offsetX = -1; offsetX <= 1; offsetX++) {
          const indexes = collisionCells.get(`${cellX + offsetX}:${cellY + offsetY}`);
          if (!indexes) continue;

          for (const j of indexes) {
            if (j <= i) continue;

            const b = activeMonsters[j];
            resolveMonsterPairCollision(a, b, i, j);
          }
        }
      }
    }
  }
}

function resolveMonsterPairCollision(a, b, indexA, indexB) {
  const aShape = getMonsterHitbox(a);
  const bShape = getMonsterHitbox(b);
  if (!hitShapesOverlap(aShape, bShape)) return;

  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const angle = dx === 0 && dy === 0 ? (indexA < indexB ? 0 : Math.PI) : Math.atan2(dy, dx);
  const distance = Math.hypot(dx, dy) || 1;
  const targetDistance =
    hitShapeRadiusToward(aShape, angle) + hitShapeRadiusToward(bShape, angle + Math.PI) + 0.5;
  const push = Math.max(1, targetDistance - distance) / 2;
  const pushX = Math.cos(angle) * push;
  const pushY = Math.sin(angle) * push;
  const previousAX = a.x;
  const previousAY = a.y;
  const previousBX = b.x;
  const previousBY = b.y;

  if (a.stationary && b.stationary) return;
  if (a.stationary) {
    b.x += pushX * 2;
    b.y += pushY * 2;
  } else if (b.stationary) {
    a.x -= pushX * 2;
    a.y -= pushY * 2;
  } else {
    a.x -= pushX;
    a.y -= pushY;
    b.x += pushX;
    b.y += pushY;
  }

  clampEntityToMap(a, a.radius);
  clampEntityToMap(b, b.radius);
  if (isCircleBlockedByMap(a.x, a.y, a.radius)) {
    a.x = previousAX;
    a.y = previousAY;
  }
  if (isCircleBlockedByMap(b.x, b.y, b.radius)) {
    b.x = previousBX;
    b.y = previousBY;
  }
}

function updateMonsterRegeneration(dt, time) {
  if (!state.spawned) return;

  for (const monster of state.monsters) {
    if (monster.hidden || monster.dying || !monster.alive) continue;
    if (monster.health >= monster.maxHealth) continue;
    if (time - monster.lastPlayerHitAt < MONSTER_REGEN_DELAY_MS) continue;

    monster.health = Math.min(
      monster.maxHealth,
      monster.health + monster.maxHealth * MONSTER_REGEN_PER_SECOND * dt,
    );
  }
}

function isMonsterSpawnClear(x, y, tierIndex = 0, speciesName = "Bee") {
  const stats = MONSTER_DEFINITIONS[speciesName]?.stats || BEE_STATS;
  const sizeScale = scaleSizeByTier(1, tierIndex);
  const spawnRadius = stats.radius * sizeScale;
  if (isCircleBlockedByMap(x, y, spawnRadius)) return false;

  const candidateShape =
    stats.hitShape === "circle"
      ? getCircleHitShape(x, y, (stats.hitRadius || Math.max(stats.hitRadiusX, stats.hitRadiusY)) * sizeScale)
      : {
          type: "ellipse",
          x,
          y,
          radiusX: stats.hitRadiusX * sizeScale,
          radiusY: stats.hitRadiusY * sizeScale,
          angle: 0,
        };

  return state.monsters.every((monster) => {
    if (monster.hidden || monster.dying || !monster.alive) return true;
    const reach = spawnRadius + monster.radius + MONSTER_SPAWN_EXTRA_SPACING;
    if (Math.abs(monster.x - x) > reach || Math.abs(monster.y - y) > reach) return true;
    return !hitShapesOverlap(candidateShape, getMonsterHitbox(monster));
  });
}

function getMonsterTierCounts() {
  const counts = Array(TIERS.length).fill(0);

  for (const monster of state.monsters) {
    if (monster.hidden || monster.dying || !monster.alive) continue;
    counts[monster.tierIndex] += 1;
  }

  return counts;
}

function getMonsterSpeciesCounts(tierIndex) {
  const counts = Object.fromEntries(MONSTER_SPECIES.map((speciesName) => [speciesName, 0]));

  for (const monster of state.monsters) {
    if (monster.hidden || monster.dying || !monster.alive) continue;
    if (monster.tierIndex !== tierIndex) continue;
    counts[monster.name] = (counts[monster.name] || 0) + 1;
  }

  return counts;
}

function chooseMonsterSpawnTierIndex() {
  const counts = getMonsterTierCounts();
  const availableTierIndexes = getMonsterTierTargetCounts()
    .map((targetCount, tierIndex) => ({ targetCount, tierIndex, currentCount: counts[tierIndex] }))
    .filter(({ targetCount, currentCount }) => currentCount < targetCount)
    .flatMap(({ targetCount, tierIndex, currentCount }) =>
      Array.from({ length: targetCount - currentCount }, () => tierIndex),
    );

  if (availableTierIndexes.length === 0) return null;

  return availableTierIndexes[Math.floor(Math.random() * availableTierIndexes.length)];
}

function getMonsterTierProgressRange(tierIndex) {
  const activeMaxTierIndex = getActiveMonsterMaxTierIndex();
  const activeMinTierIndex = getActiveMonsterMinTierIndex();
  const activeTierCount = getActiveMonsterTierCount();
  const highestProgressStart = getHighestMonsterTierProgressStart();

  if (tierIndex >= activeMaxTierIndex) {
    return {
      min: highestProgressStart,
      max: 1,
    };
  }

  const lowerTierCount = Math.max(1, activeTierCount - 1);
  const zoneIndex = clamp(
    tierIndex - activeMinTierIndex,
    0,
    lowerTierCount - 1,
  );
  const zoneSize = highestProgressStart / lowerTierCount;

  return {
    min: zoneIndex * zoneSize,
    max: (zoneIndex + 1) * zoneSize,
  };
}

function getMonsterTierIndexForPosition(x, y) {
  const progress = getRouteProgressForWorld(x, y);
  const activeMinTierIndex = getActiveMonsterMinTierIndex();
  const activeMaxTierIndex = getActiveMonsterMaxTierIndex();
  const activeTierCount = getActiveMonsterTierCount();
  const highestProgressStart = getHighestMonsterTierProgressStart();

  if (progress >= highestProgressStart) {
    return activeMaxTierIndex;
  }

  const lowerTierCount = Math.max(1, activeTierCount - 1);
  const zoneIndex = clamp(
    Math.floor((progress / highestProgressStart) * lowerTierCount),
    0,
    lowerTierCount - 1,
  );

  return activeMinTierIndex + zoneIndex;
}

function chooseMonsterSpeciesForTier(tierIndex) {
  const counts = getMonsterSpeciesCounts(tierIndex);
  const missingSpecies = MONSTER_SPECIES
    .map((speciesName) => ({
      speciesName,
      missing: Math.max(0, getMonsterSpeciesTargetCount(speciesName, tierIndex) - (counts[speciesName] || 0)),
    }))
    .filter((entry) => entry.missing > 0)
    .flatMap((entry) => Array.from({ length: entry.missing }, () => entry.speciesName));

  if (missingSpecies.length > 0) {
    return missingSpecies[Math.floor(Math.random() * missingSpecies.length)];
  }

  const roll = Math.random();
  let cursor = 0;
  for (const speciesName of MONSTER_SPECIES) {
    cursor += getMonsterSpeciesSpawnChance(speciesName, tierIndex);
    if (roll <= cursor) return speciesName;
  }

  return "Bee";
}

function isPointInsideMap(x, y, padding = BEE_STATS.radius) {
  return (
    x >= -MAP_HALF_WIDTH + padding &&
    x <= MAP_HALF_WIDTH - padding &&
    y >= -MAP_HALF_HEIGHT + padding &&
    y <= MAP_HALF_HEIGHT - padding
  );
}

function isPointOutsideSpawnSafeZone(x, y, padding = 0) {
  return Math.hypot(x, y) >= MONSTER_SPAWN_SAFE_RADIUS + padding;
}

function nextMonsterSpawnSequence(tierIndex) {
  const current = state.monsterSpawnSequence[tierIndex] || 0;
  state.monsterSpawnSequence[tierIndex] = current + 1;
  return current;
}

function createGarden2UpperSpawnPoint(tierIndex, sequence, spawnPadding) {
  const activeMaxTierIndex = getActiveMonsterMaxTierIndex();
  if (state.mapId !== "garden2" || tierIndex < activeMaxTierIndex - 1) return null;

  const columns = 10;
  for (let attempt = 0; attempt < 180; attempt++) {
    const column = (sequence + attempt * 3) % columns;
    const rowSeed = (sequence * 0.61803398875 + attempt * 0.217) % 1;
    const tileX = 39 + column * 1.75 + (mapEdgeNoise(sequence + attempt, 13.1) - 0.5) * 0.9;
    const tileY = 4.2 + rowSeed * 10.4;
    const { x, y } = routeTileToWorld(tileX, tileY);

    if (
      isPointInsideMap(x, y, spawnPadding) &&
      !isCircleBlockedByMap(x, y, spawnPadding)
    ) {
      return { x, y };
    }
  }

  return null;
}

function createTierSpawnPoint(tierIndex) {
  const { min, max } = getMonsterTierProgressRange(tierIndex);
  const spawnPadding = scaleSizeByTier(BEE_STATS.radius, tierIndex);
  const tileWorldSize = MAP_WIDTH / MAP_TILE_COLUMNS;
  const maxOffset = Math.max(
    0,
    getActiveMapDefinition().routeHalfWidth - spawnPadding / tileWorldSize - 0.35,
  );
  const sequence = nextMonsterSpawnSequence(tierIndex);
  const laneCount = 9;
  const upperSpawn = createGarden2UpperSpawnPoint(tierIndex, sequence, spawnPadding);
  if (upperSpawn) return upperSpawn;

  for (let attempt = 0; attempt < 256; attempt++) {
    const progressSeed = (sequence * 0.61803398875 + attempt * 0.139 + tierIndex * 0.071) % 1;
    const laneIndex = (sequence + attempt * 4 + tierIndex * 3) % laneCount;
    const laneRatio = laneCount <= 1 ? 0.5 : laneIndex / (laneCount - 1);
    const offsetJitter = (mapEdgeNoise(sequence * 0.37 + attempt, tierIndex * 0.73 - attempt) * 0.18);
    const progress = min + (0.025 + progressSeed * 0.95) * (max - min);
    const sideOffset = maxOffset * clamp((laneRatio - 0.5) * 2 + offsetJitter, -1, 1);
    const { x, y } = getRouteWorldPosition(progress, sideOffset);

    if (
      isPointInsideMap(x, y, spawnPadding) &&
      !isCircleBlockedByMap(x, y, spawnPadding) &&
      getMonsterTierIndexForPosition(x, y) === tierIndex
    ) {
      return { x, y };
    }
  }

  const fallback = getRouteWorldPosition((min + max) / 2, 0);
  return {
    x: clampToMapX(fallback.x, spawnPadding),
    y: clampToMapY(fallback.y, spawnPadding),
  };
}

function createRandomMonster(tierIndex = chooseMonsterSpawnTierIndex(), speciesName = null) {
  if (tierIndex == null) return null;
  const monsterSpecies = speciesName || chooseMonsterSpeciesForTier(tierIndex);

  let fallbackX = 0;
  let fallbackY = 0;
  let fallbackDirection = 1;

  for (let attempt = 0; attempt < 32; attempt++) {
    const { x, y } = createTierSpawnPoint(tierIndex);
    const direction = Math.random() < 0.5 ? -1 : 1;
    fallbackX = x;
    fallbackY = y;
    fallbackDirection = direction;

    if (isMonsterSpawnClear(x, y, tierIndex, monsterSpecies)) {
      return createMonster(monsterSpecies, x, y, direction, tierIndex);
    }
  }

  if (isMonsterSpawnClear(fallbackX, fallbackY, tierIndex, monsterSpecies)) {
    return createMonster(monsterSpecies, fallbackX, fallbackY, fallbackDirection, tierIndex);
  }

  return null;
}

function createRandomBee(tierIndex = chooseMonsterSpawnTierIndex()) {
  return createRandomMonster(tierIndex, "Bee");
}

function seedMonsterPopulation() {
  state.monsterSpawnSequence = Array(TIERS.length).fill(0);
  const targetCounts = getMonsterTierTargetCounts();
  for (let tierIndex = 0; tierIndex < targetCounts.length; tierIndex++) {
    const targetCount = targetCounts[tierIndex];

    for (let count = 0; count < targetCount; count++) {
      const monster = createRandomMonster(tierIndex);
      if (monster) state.monsters.push(monster);
    }
  }
}

function updateMonsterSpawns(time) {
  if (!state.spawned) return;

  state.monsters = state.monsters.filter((monster) => !monster.hidden);
  if (state.monsters.length >= getMaxMonstersForCurrentMap()) return;
  if (time < state.nextMonsterSpawnAt) return;

  const monster = createRandomMonster();
  if (monster) {
    state.monsters.push(monster);
  }
  state.nextMonsterSpawnAt = time + MONSTER_RESPAWN_MS;
}

function getWeaponPositions(orbitRadius = state.weapon.orbitRadius) {
  const orbitingPetals = state.weapon.petals.filter((petal) => petal && !(petal.placeableBarrier && petal.placed));
  const placedPetals = state.weapon.petals.filter((petal) => petal?.placeableBarrier && petal.placed && petal.active);
  const lentilHomingRange = getLentilHomingRange();
  const orbitingUnits = orbitingPetals.flatMap((petal) =>
    Array.from({ length: getPetalOrbitUnitCount(petal) }, (_, unitIndex) => ({
      petal,
      unitIndex,
      unitState: getPetalUnitState(petal, unitIndex),
      unitCount: getPetalOrbitUnitCount(petal),
    })),
  );
  const equippedCount = orbitingUnits.length;
  const orbitingPositions = orbitingUnits.map((unit, index) => {
    const angle = state.weapon.angle + (index / equippedCount) * Math.PI * 2;
    const lightScale = unit.petal.name === "Light" ? 0.72 : 1;
    const hitRadius = state.weapon.hitRadius * lightScale;
    let x = state.player.x + Math.cos(angle) * orbitRadius;
    let y = state.player.y + Math.sin(angle) * orbitRadius;
    let drawAngle = angle;

    if (lentilHomingRange > 0 && isPetalUnitActive(unit.petal, unit.unitIndex)) {
      const target = getNearestMonsterToPoint(x, y, lentilHomingRange);
      if (target) {
        const targetAngle = Math.atan2(target.y - y, target.x - x);
        const distance = Math.hypot(target.x - x, target.y - y);
        const targetDistance = Math.max(0, distance - target.radius - hitRadius * 0.55);
        const travel = Math.min(lentilHomingRange, targetDistance);
        x += Math.cos(targetAngle) * travel;
        y += Math.sin(targetAngle) * travel;
        drawAngle = targetAngle;
      }
    }

    return {
      petal: unit.petal,
      unitIndex: unit.unitIndex,
      unitState: unit.unitState,
      unitCount: unit.unitCount,
      angle: drawAngle,
      x,
      y,
      hitRadius,
      sizeScale: lightScale,
    };
  });

  return orbitingPositions.concat(
    placedPetals.map((petal) => ({
      petal,
      angle: petal.placedAngle || 0,
      x: petal.placedX,
      y: petal.placedY,
      placed: true,
      hitRadius: POLLEN_BARRIER_RADIUS,
    })),
  );
}

function createDrop(x, y, item, quantity = 1) {
  return {
    id: item.id,
    x,
    y,
    item,
    quantity,
    size: DROP_SIZE,
    pickupRadius: DROP_SIZE * 0.55,
  };
}

function getDropStackKey(drop) {
  return getItemStackKey(drop.item);
}

function mergeDropInto(target, source) {
  target.quantity ||= 1;
  source.quantity ||= 1;
  const totalQuantity = target.quantity + source.quantity;
  target.x = (target.x * target.quantity + source.x * source.quantity) / totalQuantity;
  target.y = (target.y * target.quantity + source.y * source.quantity) / totalQuantity;
  target.quantity = totalQuantity;
}

function mergeNearbyDrops() {
  if (state.drops.length < 2) return;

  const cellSize = DROP_STACK_MERGE_RADIUS;
  const cells = new Map();
  const mergedDrops = [];

  for (const drop of state.drops) {
    drop.quantity ||= 1;
    let merged = false;
    const cellX = Math.floor(drop.x / cellSize);
    const cellY = Math.floor(drop.y / cellSize);

    for (let offsetY = -1; offsetY <= 1 && !merged; offsetY++) {
      for (let offsetX = -1; offsetX <= 1 && !merged; offsetX++) {
        const candidates = cells.get(`${cellX + offsetX}:${cellY + offsetY}`);
        if (!candidates) continue;

        for (const candidate of candidates) {
          if (getDropStackKey(candidate) !== getDropStackKey(drop)) continue;
          if (Math.hypot(candidate.x - drop.x, candidate.y - drop.y) > DROP_STACK_MERGE_RADIUS) continue;
          mergeDropInto(candidate, drop);
          merged = true;
          break;
        }
      }
    }

    if (merged) continue;

    const key = `${cellX}:${cellY}`;
    if (!cells.has(key)) cells.set(key, []);
    cells.get(key).push(drop);
    mergedDrops.push(drop);
  }

  state.drops = mergedDrops;
}

function addDropToInventory(drop) {
  drop.quantity ||= 1;
  state.inventory.push(drop.item);
  for (let index = 1; index < drop.quantity; index++) {
    state.inventory.push(createPetalItem(drop.item.name, drop.item.tierIndex));
  }
}

function getMonsterDropCount(tierIndex) {
  const tierNumber = tierIndex + 1;
  if (tierNumber >= 17) return 40;
  if (tierNumber >= 14) return 20;
  if (tierNumber >= 10) return 10;
  return 5;
}

function spawnMonsterDrops(monster) {
  const definition = MONSTER_DEFINITIONS[monster.name] || MONSTER_DEFINITIONS.Bee;
  const dropCount =
    getMonsterDropCount(monster.tierIndex) + (Math.random() < getExtraDropChance() ? 1 : 0);
  const dropTierIndex = Math.max(0, monster.tierIndex - 1);
  const spread = Math.max(26, monster.radius * 0.18);
  const angle = Math.random() * Math.PI * 2;
  const drops = definition.drops || MONSTER_DEFINITIONS.Bee.drops;

  drops.forEach((dropName, index) => {
    const dropAngle = angle + (index / Math.max(1, drops.length)) * Math.PI * 2;
    state.drops.push(
      createDrop(
        monster.x + Math.cos(dropAngle) * spread,
        monster.y + Math.sin(dropAngle) * spread,
        createPetalItem(dropName, dropTierIndex),
        dropCount,
      ),
    );
  });
  mergeNearbyDrops();
}

function updateDrops(dt = 1 / 60) {
  if (!state.spawned) return;
  if (!state.player.alive || state.player.dying || state.player.hidden) return;

  mergeNearbyDrops();
  const playerShape = getPlayerHitbox();
  const magnetLevel = getTalentLevel("magnet");
  const magnetRadius = getDropMagnetRadius();
  const magnetPullSpeed = 520 + magnetLevel * 130;
  let pickedUpDrop = false;
  state.drops = state.drops.filter((drop) => {
    const dx = state.player.x - drop.x;
    const dy = state.player.y - drop.y;
    const distance = Math.hypot(dx, dy);
    if (magnetRadius > 0 && distance < magnetRadius && distance > 1) {
      const distanceBoost = 1 + (1 - distance / magnetRadius) * 1.4;
      const pull = Math.min(distance, magnetPullSpeed * distanceBoost * dt);
      drop.x += (dx / distance) * pull;
      drop.y += (dy / distance) * pull;
    }

    const dropShape = getCircleHitShape(drop.x, drop.y, drop.pickupRadius);
    if (!hitShapesOverlap(playerShape, dropShape)) return true;

    addDropToInventory(drop);
    pickedUpDrop = true;
    return false;
  });
  if (pickedUpDrop) renderItemUi();
  mergeNearbyDrops();
}

function updatePetals(time) {
  const activePetals = new Set(state.weapon.petals.filter(Boolean));

  for (const petal of [...state.weapon.petals, ...state.weapon.secondaryPetals]) {
    if (!petal) continue;
    if (petal.name === "Light") {
      ensureLightOrbStates(petal);
      for (const orb of petal.orbs) {
        if (!orb.active && time >= orb.readyAt) {
          orb.active = true;
          orb.durability = petal.maxDurability;
          orb.readyAt = 0;
          orb.cooldownStartedAt = 0;
        }
      }
      syncPetalActiveState(petal);
      continue;
    }

    if (!petal.active && time >= petal.readyAt) {
      petal.active = true;
      petal.durability = petal.maxDurability;
      petal.healEffectStartedAt = 0;
      petal.healEffectEndsAt = 0;
      petal.cooldownStartedAt = 0;
      resetPetalPlacement(petal);
    }

    if (
      petal.active &&
      activePetals.has(petal) &&
      PETAL_DEFINITIONS[petal.name]?.autoHeal &&
      state.player.alive &&
      !state.player.dying &&
      state.player.health < state.player.maxHealth
    ) {
      state.player.health = Math.min(
        state.player.maxHealth,
        state.player.health + (petal.healAmount || PETAL_DEFINITIONS[petal.name].baseHeal || 0),
      );
      petal.healEffectStartedAt = time;
      petal.healEffectEndsAt = time + 180;
      petal.healEffectAngle = state.weapon.angle;
      petal.durability = 0;
      startPetalCooldown(petal, time);
      resetPetalPlacement(petal);
    }
  }
}

function updateDamageNumbers(time) {
  state.damageNumbers = state.damageNumbers.filter((number) => time < number.expiresAt);
}

function getMonsterBodyDamageToPetal(monster) {
  return Math.max(0, Math.round(monster.attack || 0));
}

function breakPlacedPollen(petal, time) {
  startPetalCooldown(petal, time);
  resetPetalPlacement(petal);
}

function getLentilHomingRange() {
  return state.weapon.petals.reduce((total, petal) => {
    if (!petal || petal.name !== "Lentil" || !petal.active) return total;
    return total + scaleStatByTier(PETAL_DEFINITIONS.Lentil.homingRange, 1.18, petal.tierIndex);
  }, 0);
}

function getNearestMonsterToPoint(x, y, maxDistance) {
  let bestMonster = null;
  let bestDistance = maxDistance;

  for (const monster of state.monsters) {
    if (monster.hidden || monster.dying || !monster.alive) continue;

    const distance = Math.hypot(monster.x - x, monster.y - y) - monster.radius;
    if (distance < bestDistance) {
      bestDistance = distance;
      bestMonster = monster;
    }
  }

  return bestMonster;
}

function resolvePlacedPollenBarriers(time) {
  if (!state.spawned) return;

  for (const weapon of getWeaponPositions()) {
    const petal = weapon.petal;
    if (!weapon.placed || !petal?.placeableBarrier || !petal.active || !petal.placed) continue;

    if (time - (petal.placedAt || 0) >= POLLEN_BARRIER_LIFETIME_MS) {
      breakPlacedPollen(petal, time);
      continue;
    }

    const pollenShape = getCircleHitShape(petal.placedX, petal.placedY, POLLEN_BARRIER_RADIUS);

    for (const monster of state.monsters) {
      if (monster.hidden || monster.dying || !monster.alive) continue;
      if (Math.abs(monster.x - petal.placedX) > monster.radius + POLLEN_BARRIER_RADIUS + 12) continue;
      if (Math.abs(monster.y - petal.placedY) > monster.radius + POLLEN_BARRIER_RADIUS + 12) continue;

      const monsterShape = getMonsterHitbox(monster);
      if (!hitShapesOverlap(pollenShape, monsterShape)) continue;

      const angle = Math.atan2(petal.placedY - monster.y, petal.placedX - monster.x);
      const distance = Math.hypot(petal.placedX - monster.x, petal.placedY - monster.y) || 1;
      const targetDistance = POLLEN_BARRIER_RADIUS + hitShapeRadiusToward(monsterShape, angle) + 0.5;
      const push = Math.max(1, targetDistance - distance);
      const previousPollenX = petal.placedX;
      const previousPollenY = petal.placedY;
      const pollenBody = { x: petal.placedX, y: petal.placedY };

      moveCircleEntityWithMapCollision(
        pollenBody,
        petal.placedX + Math.cos(angle) * push * POLLEN_BARRIER_SELF_PUSH,
        petal.placedY + Math.sin(angle) * push * POLLEN_BARRIER_SELF_PUSH,
        POLLEN_BARRIER_RADIUS,
      );
      petal.placedX = pollenBody.x;
      petal.placedY = pollenBody.y;

      if (!monster.stationary) {
        moveCircleEntityWithMapCollision(
          monster,
          monster.x - Math.cos(angle) * push * POLLEN_BARRIER_MONSTER_PUSH,
          monster.y - Math.sin(angle) * push * POLLEN_BARRIER_MONSTER_PUSH,
          monster.radius,
          MONSTER_COLLISION_SAMPLE_COUNT,
        );
        clampEntityToMap(monster, monster.radius);
      }

      if (time >= (petal.nextBarrierDamageAt || 0)) {
        const wasAlive = monster.alive;
        if (damageCreature(monster, petal.attack, time)) {
          addDamageNumber(monster, petal.attack, time);
          monster.lastPlayerHitAt = time;
          if (wasAlive && !monster.alive) {
            addPlayerExperience(monster.experienceReward);
            spawnMonsterDrops(monster);
          }
        }
        petal.durability -= getMonsterBodyDamageToPetal(monster);
        petal.nextBarrierDamageAt = time + POLLEN_BARRIER_DAMAGE_COOLDOWN_MS;
        if (petal.durability <= 0) {
          petal.placedX = previousPollenX;
          petal.placedY = previousPollenY;
          breakPlacedPollen(petal, time);
          break;
        }
      }
    }
  }
}

function pushMonsterAwayFromWeapon(weapon, monster, monsterShape) {
  if (monster.stationary) return;

  const angle = Math.atan2(weapon.y - monster.y, weapon.x - monster.x);
  const distance = Math.hypot(weapon.x - monster.x, weapon.y - monster.y) || 1;
  const weaponRadius = weapon.hitRadius || state.weapon.hitRadius;
  const targetDistance = weaponRadius + hitShapeRadiusToward(monsterShape, angle) + 0.5;
  const push = Math.max(0, targetDistance - distance);
  if (push <= 0) return;

  moveCircleEntityWithMapCollision(
    monster,
    monster.x - Math.cos(angle) * Math.max(1, push) * PETAL_MONSTER_PUSH_STRENGTH,
    monster.y - Math.sin(angle) * Math.max(1, push) * PETAL_MONSTER_PUSH_STRENGTH,
    monster.radius,
    MONSTER_COLLISION_SAMPLE_COUNT,
  );
  clampEntityToMap(monster, monster.radius);
}

function updateWeaponHits(time) {
  if (!state.spawned) return;
  if (!state.player.alive || state.player.dying || state.player.hidden) return;

  for (const weapon of getWeaponPositions()) {
    if (!weapon.petal) continue;
    if (!isPetalUnitActive(weapon.petal, weapon.unitIndex)) continue;
    if (weapon.placed) continue;

    const weaponHitbox = getWeaponHitbox(weapon);

    for (const monster of state.monsters) {
      if (monster.hidden || monster.dying || !monster.alive) continue;
      const reach = state.weapon.hitRadius + monster.radius + 18;
      if (Math.abs(monster.x - weapon.x) > reach || Math.abs(monster.y - weapon.y) > reach) continue;

      const monsterShape = getMonsterHitbox(monster);
      if (!hitShapesOverlap(weaponHitbox, monsterShape)) continue;

      pushMonsterAwayFromWeapon(weapon, monster, monsterShape);
      const wasAlive = monster.alive;
      if (damageCreature(monster, weapon.petal.attack, time)) {
        addDamageNumber(monster, weapon.petal.attack, time);
        monster.lastPlayerHitAt = time;
        if (wasAlive && !monster.alive) {
          addPlayerExperience(monster.experienceReward);
          spawnMonsterDrops(monster);
        }
      }

      const unitState = getPetalUnitState(weapon.petal, weapon.unitIndex);
      unitState.durability -= getMonsterBodyDamageToPetal(monster);
      if (unitState.durability <= 0) {
        startPetalUnitCooldown(weapon.petal, weapon.unitIndex, time);
      } else {
        syncPetalActiveState(weapon.petal);
      }

      break;
    }
  }
}

function update(dt, time) {
  updatePointerWorld();
  updateCreatureEffects(state.player, dt, time);
  syncDeathScreen();
  if (updatePortalTransition(time)) return;

  const toTargetX = state.pointer.worldX - state.player.x;
  const toTargetY = state.pointer.worldY - state.player.y;
  const distance = Math.hypot(toTargetX, toTargetY);
  const playerPointerDeadZone = state.player.radius;
  const movementVector = getDirectionalMovementVector();

  if (
    state.spawned &&
    !state.uiLockMovement &&
    state.player.alive &&
    !usesTouchControls() &&
    state.settings.movement === "mouse" &&
    distance > playerPointerDeadZone
  ) {
    const step = Math.min(distance, getPlayerMoveSpeed() * dt);
    moveCircleEntityWithMapCollision(
      state.player,
      state.player.x + (toTargetX / distance) * step,
      state.player.y + (toTargetY / distance) * step,
      state.player.hitRadius,
    );
    clampEntityToMap(state.player, state.player.radius);
  }

  if (
    state.spawned &&
    !state.uiLockMovement &&
    state.player.alive &&
    (usesTouchControls() || state.settings.movement !== "mouse") &&
    Math.hypot(movementVector.x, movementVector.y) > 0
  ) {
    const step = getPlayerMoveSpeed() * dt;
    moveCircleEntityWithMapCollision(
      state.player,
      state.player.x + movementVector.x * step,
      state.player.y + movementVector.y * step,
      state.player.hitRadius,
    );
    clampEntityToMap(state.player, state.player.radius);
  }

  if (state.controls.attack) {
    state.weapon.targetRadius = getPetalOrbitRadius(state.weapon.attackRadius);
  } else if (state.controls.defend) {
    state.weapon.targetRadius = state.weapon.defendRadius;
  } else {
    state.weapon.targetRadius = getPetalOrbitRadius(state.weapon.neutralRadius);
  }

  state.weapon.orbitRadius +=
    (state.weapon.targetRadius - state.weapon.orbitRadius) * Math.min(1, dt * 14);
  state.weapon.angle += dt * getPetalSpinSpeed();
  if (state.spawned && state.player.alive && !state.player.dying) {
    state.player.health = Math.min(
      state.player.maxHealth,
      state.player.health + getPlayerRegenPerSecond() * dt,
    );
  }
  updatePetals(time);
  updateLeaderboard(time);
  updateMonsters(dt, time);
  updateMonsterRegeneration(dt, time);
  updateMonsterSpawns(time);
  resolveMonsterCollisions();
  resolvePlayerMonsterCollisions(time);
  resolvePlacedPollenBarriers(time);
  clampEntityToMap(state.player, state.player.radius);
  updateMapPortals(time);
  updateDrops(dt);
  updateWeaponHits(time);
  syncEquipmentSlotWearUi();
  updateDamageNumbers(time);

  if (state.settings.cameraMode === "locked") {
    state.camera.x += (state.player.x - state.camera.x) * Math.min(1, dt * 7);
    state.camera.y += (state.player.y - state.camera.y) * Math.min(1, dt * 7);
  } else {
    const cameraX = Number(state.input.cameraRight) - Number(state.input.cameraLeft);
    const cameraY = Number(state.input.cameraDown) - Number(state.input.cameraUp);
    const cameraLength = Math.hypot(cameraX, cameraY) || 1;
    const cameraSpeed = 620 / getViewScale();
    state.camera.x += (cameraX / cameraLength) * cameraSpeed * dt;
    state.camera.y += (cameraY / cameraLength) * cameraSpeed * dt;
  }
  clampCameraToMap();
  updatePointerWorld();

  const playerPoint = worldToScreen(state.player.x, state.player.y);
  const playerScreenX = playerPoint.x;
  const playerScreenY = playerPoint.y;
  const lookX = state.pointer.x - playerScreenX;
  const lookY = state.pointer.y - playerScreenY;
  const lookLength = Math.hypot(lookX, lookY) || 1;
  const targetEyeX = lookX / lookLength;
  const targetEyeY = lookY / lookLength;
  const eyeEase = Math.min(1, dt * 16);
  state.eyeLook.x += (targetEyeX - state.eyeLook.x) * eyeEase;
  state.eyeLook.y += (targetEyeY - state.eyeLook.y) * eyeEase;
}

function worldToScreen(x, y) {
  const viewScale = getViewScale();
  return {
    x: (x - state.camera.x) * viewScale + state.width / 2,
    y: (y - state.camera.y) * viewScale + state.height / 2,
  };
}

function worldToMapUiPoint(x, y, width, height) {
  return {
    x: ((x + MAP_HALF_WIDTH) / MAP_WIDTH) * width,
    y: ((y + MAP_HALF_HEIGHT) / MAP_HEIGHT) * height,
  };
}

function drawGarden2PortalMapMarker(targetCtx, width, height, radius = 6) {
  const portals = getMapPortalDefinitions();
  if (!portals.length) return;

  targetCtx.save();
  targetCtx.fillStyle = "#ffd629";
  targetCtx.strokeStyle = "#3b2c22";
  targetCtx.lineWidth = Math.max(2, radius * 0.45);
  for (const portal of portals) {
    const point = worldToMapUiPoint(portal.x, portal.y, width, height);
    targetCtx.beginPath();
    targetCtx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    targetCtx.fill();
    targetCtx.stroke();
  }
  targetCtx.restore();
}

function gardenHash(x, y, seed) {
  const value = Math.sin(x * 12.9898 + y * 78.233 + seed * 41.531) * 43758.5453;
  return value - Math.floor(value);
}

function drawRoundTri(targetCtx, cx, cy, size, rotate, round) {
  targetCtx.save();
  targetCtx.translate(cx, cy);
  targetCtx.rotate(rotate);
  targetCtx.beginPath();

  const a1 = -Math.PI / 2;
  const a2 = a1 + (Math.PI * 2) / 3;
  const a3 = a1 + (Math.PI * 4) / 3;
  const v1 = { x: Math.cos(a1) * size, y: Math.sin(a1) * size };
  const v2 = { x: Math.cos(a2) * size, y: Math.sin(a2) * size };
  const v3 = { x: Math.cos(a3) * size, y: Math.sin(a3) * size };
  const cornerRadius = size * round;

  function roundCorner(p0, p, p1) {
    const dx0 = p0.x - p.x;
    const dy0 = p0.y - p.y;
    const dx1 = p1.x - p.x;
    const dy1 = p1.y - p.y;
    const len0 = Math.hypot(dx0, dy0) || 1;
    const len1 = Math.hypot(dx1, dy1) || 1;
    const pa = { x: p.x + dx0 * (cornerRadius / len0), y: p.y + dy0 * (cornerRadius / len0) };
    const pb = { x: p.x + dx1 * (cornerRadius / len1), y: p.y + dy1 * (cornerRadius / len1) };
    targetCtx.lineTo(pa.x, pa.y);
    targetCtx.quadraticCurveTo(p.x, p.y, pb.x, pb.y);
  }

  targetCtx.moveTo(
    v1.x + ((v2.x - v1.x) * cornerRadius) / size,
    v1.y + ((v2.y - v1.y) * cornerRadius) / size,
  );
  roundCorner(v1, v2, v3);
  roundCorner(v2, v3, v1);
  roundCorner(v3, v1, v2);
  targetCtx.closePath();
  targetCtx.fill();
  targetCtx.restore();
}

function getGardenTextureCandidate(layer, gridX, gridY) {
  const baseX = gridX * layer.cell + layer.cell * 0.5;
  const baseY = gridY * layer.cell + layer.cell * 0.5;

  return {
    layer,
    gridX,
    gridY,
    x: baseX + (gardenHash(gridX, gridY, layer.seed) - 0.5) * layer.cell * layer.jitter,
    y: baseY + (gardenHash(gridX, gridY, layer.seed + 11.7) - 0.5) * layer.cell * layer.jitter,
  };
}

function hasEarlierGardenPriority(a, b) {
  if (a.layer.order !== b.layer.order) return a.layer.order < b.layer.order;
  if (a.gridY !== b.gridY) return a.gridY < b.gridY;
  return a.gridX < b.gridX;
}

function isStableGardenCandidateAccepted(
  candidate,
  layers = GARDEN_TEXTURE_LAYERS,
  minDistance = GARDEN_GLOBAL_MIN_DIST,
) {
  for (const layer of layers) {
    if (layer.order > candidate.layer.order) continue;

    const neighborRange = Math.ceil(minDistance / layer.cell) + 2;
    const centerGridX = Math.floor(candidate.x / layer.cell);
    const centerGridY = Math.floor(candidate.y / layer.cell);

    for (let offsetY = -neighborRange; offsetY <= neighborRange; offsetY++) {
      for (let offsetX = -neighborRange; offsetX <= neighborRange; offsetX++) {
        const gridX = centerGridX + offsetX;
        const gridY = centerGridY + offsetY;
        if (layer === candidate.layer && gridX === candidate.gridX && gridY === candidate.gridY) continue;

        const neighbor = getGardenTextureCandidate(layer, gridX, gridY);
        if (!hasEarlierGardenPriority(neighbor, candidate)) continue;
        if (Math.hypot(neighbor.x - candidate.x, neighbor.y - candidate.y) < minDistance) {
          return false;
        }
      }
    }
  }

  return true;
}

function generateGardenJitterPoints(
  left,
  top,
  right,
  bottom,
  layer,
  layers = GARDEN_TEXTURE_LAYERS,
  minDistance = GARDEN_GLOBAL_MIN_DIST,
) {
  const points = [];
  const startCellX = Math.floor(left / layer.cell) - 1;
  const endCellX = Math.ceil(right / layer.cell) + 1;
  const startCellY = Math.floor(top / layer.cell) - 1;
  const endCellY = Math.ceil(bottom / layer.cell) + 1;

  for (let gridY = startCellY; gridY <= endCellY; gridY++) {
    for (let gridX = startCellX; gridX <= endCellX; gridX++) {
      const point = getGardenTextureCandidate(layer, gridX, gridY);

      if (point.x < left || point.y < top || point.x > right || point.y > bottom) continue;
      if (isStableGardenCandidateAccepted(point, layers, minDistance)) points.push(point);
    }
  }

  return points;
}

function drawGarden2CircleGroundDecorations(
  targetCtx,
  mapLeft,
  mapTop,
  mapScreenWidth,
  mapScreenHeight,
  visibleWorldLeft,
  visibleWorldTop,
  visibleWorldRight,
  visibleWorldBottom,
  cameraX,
  cameraY,
  viewScale,
) {
  const toScreen = (point) => ({
    x: (point.x - cameraX) * viewScale + state.width / 2,
    y: (point.y - cameraY) * viewScale + state.height / 2,
  });

  targetCtx.save();
  targetCtx.beginPath();
  targetCtx.rect(mapLeft, mapTop, mapScreenWidth, mapScreenHeight);
  targetCtx.clip();

  for (const layer of GARDEN2_CIRCLE_TEXTURE_LAYERS) {
    targetCtx.fillStyle = layer.color;
    for (const point of generateGardenJitterPoints(
      visibleWorldLeft,
      visibleWorldTop,
      visibleWorldRight,
      visibleWorldBottom,
      layer,
      GARDEN2_CIRCLE_TEXTURE_LAYERS,
      GARDEN2_CIRCLE_GLOBAL_MIN_DIST,
    )) {
      const screen = toScreen(point);
      const radius =
        (layer.minRadius + gardenHash(point.gridX, point.gridY, layer.seed + 19) * (layer.maxRadius - layer.minRadius)) *
        viewScale;

      targetCtx.beginPath();
      targetCtx.arc(screen.x, screen.y, radius, 0, Math.PI * 2);
      targetCtx.fill();
    }
  }

  targetCtx.restore();
}

function drawGardenGroundDecorations(
  targetCtx,
  mapLeft,
  mapTop,
  mapScreenWidth,
  mapScreenHeight,
  visibleWorldLeft,
  visibleWorldTop,
  visibleWorldRight,
  visibleWorldBottom,
  cameraX,
  cameraY,
  viewScale,
) {
  const toScreen = (point) => ({
    x: (point.x - cameraX) * viewScale + state.width / 2,
    y: (point.y - cameraY) * viewScale + state.height / 2,
  });
  const [darkTriLayer, lightTriLayer, dotLayer] = GARDEN_TEXTURE_LAYERS;

  targetCtx.save();
  targetCtx.beginPath();
  targetCtx.rect(mapLeft, mapTop, mapScreenWidth, mapScreenHeight);
  targetCtx.clip();

  targetCtx.fillStyle = GARDEN_DARK_TRI;
  for (const point of generateGardenJitterPoints(
    visibleWorldLeft,
    visibleWorldTop,
    visibleWorldRight,
    visibleWorldBottom,
    darkTriLayer,
  )) {
    const screen = toScreen(point);
    const size = (14 + gardenHash(point.gridX, point.gridY, 2) * 24) * viewScale;
    const rotate = gardenHash(point.gridX, point.gridY, 3) * Math.PI * 2;
    drawRoundTri(targetCtx, screen.x, screen.y, size, rotate, 0.22);
  }

  targetCtx.fillStyle = GARDEN_LIGHT_TRI;
  for (const point of generateGardenJitterPoints(
    visibleWorldLeft,
    visibleWorldTop,
    visibleWorldRight,
    visibleWorldBottom,
    lightTriLayer,
  )) {
    const screen = toScreen(point);
    const size = (9 + gardenHash(point.gridX, point.gridY, 6) * 20) * viewScale;
    const rotate = gardenHash(point.gridX, point.gridY, 7) * Math.PI * 2;
    drawRoundTri(targetCtx, screen.x, screen.y, size, rotate, 0.22);
  }

  targetCtx.fillStyle = GARDEN_DARK_TRI;
  for (const point of generateGardenJitterPoints(
    visibleWorldLeft,
    visibleWorldTop,
    visibleWorldRight,
    visibleWorldBottom,
    dotLayer,
  )) {
    const screen = toScreen(point);
    const radius = (2 + gardenHash(point.gridX, point.gridY, 10) * 4) * viewScale;
    targetCtx.beginPath();
    targetCtx.arc(screen.x, screen.y, radius, 0, Math.PI * 2);
    targetCtx.fill();
  }

  targetCtx.restore();
}

function drawBackground() {
  const viewScale = getViewScale();
  const textureCameraX = state.spawned ? state.camera.x : state.camera.x + state.lastTime * 0.18 / viewScale;
  const textureCameraY = state.camera.y;
  const mapLeft = (-MAP_HALF_WIDTH - state.camera.x) * viewScale + state.width / 2;
  const mapTop = (-MAP_HALF_HEIGHT - state.camera.y) * viewScale + state.height / 2;
  const visibleWorldLeft = Math.max(-MAP_HALF_WIDTH, textureCameraX - state.width / (2 * viewScale));
  const visibleWorldTop = Math.max(-MAP_HALF_HEIGHT, textureCameraY - state.height / (2 * viewScale));
  const visibleWorldRight = Math.min(MAP_HALF_WIDTH, textureCameraX + state.width / (2 * viewScale));
  const visibleWorldBottom = Math.min(MAP_HALF_HEIGHT, textureCameraY + state.height / (2 * viewScale));

  ctx.fillStyle = "#186044";
  ctx.fillRect(0, 0, state.width, state.height);
  ctx.fillStyle = GARDEN_BASE_GREEN;
  ctx.fillRect(mapLeft, mapTop, MAP_WIDTH * viewScale, MAP_HEIGHT * viewScale);

  if (state.mapId === "garden2") {
    drawGarden2CircleGroundDecorations(
      ctx,
      mapLeft,
      mapTop,
      MAP_WIDTH * viewScale,
      MAP_HEIGHT * viewScale,
      visibleWorldLeft,
      visibleWorldTop,
      visibleWorldRight,
      visibleWorldBottom,
      textureCameraX,
      textureCameraY,
      viewScale,
    );
  } else {
    drawGardenGroundDecorations(
      ctx,
      mapLeft,
      mapTop,
      MAP_WIDTH * viewScale,
      MAP_HEIGHT * viewScale,
      visibleWorldLeft,
      visibleWorldTop,
      visibleWorldRight,
      visibleWorldBottom,
      textureCameraX,
      textureCameraY,
      viewScale,
    );
  }

  if (!state.spawned) {
    drawMenuFloatingPetals();
    return;
  }

  drawVisibleMapWallShapes(
    ctx,
    mapLeft,
    mapTop,
    MAP_WIDTH * viewScale,
    MAP_HEIGHT * viewScale,
    visibleWorldLeft,
    visibleWorldTop,
    visibleWorldRight,
    visibleWorldBottom,
  );
}

function drawMenuFloatingPetals() {
  if (!state.menuPetals.length) seedMenuFloatingPetals();

  const time = state.lastTime * 0.001;
  ctx.save();
  for (const petal of state.menuPetals) {
    const travelWidth = state.width + petal.size * 3;
    const x = state.width + petal.size - ((petal.x + time * petal.speed) % travelWidth);
    const y = (petal.y + Math.sin(time * 1.3 + petal.phase) * petal.drift + state.height) % state.height;
    const image = state.assets[petal.asset] || state.assets.basic;

    if (!image) continue;
    ctx.save();
    ctx.globalAlpha = petal.alpha;
    ctx.translate(x, y);
    ctx.rotate(petal.rotation + time * petal.spin);
    ctx.drawImage(image, -petal.size / 2, -petal.size / 2, petal.size, petal.size);
    ctx.restore();
  }
  ctx.restore();
}

function drawMapPortals() {
  if (!state.spawned) return;

  const portals = getMapPortalDefinitions();
  if (!portals.length) return;

  const viewScale = getViewScale();
  const time = state.lastTime * 0.001;
  const layers = [
    { size: 110, speed: 1.25, alpha: 0.8 },
    { size: 75, speed: -1.75, alpha: 0.8 },
    { size: 42, speed: 2.3, alpha: 0.8 },
  ];

  ctx.save();
  for (const portal of portals) {
    const point = worldToScreen(portal.x, portal.y);
    for (const layer of layers) {
      ctx.fillStyle = `rgba(255, 255, 255, ${layer.alpha})`;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.68)";
      ctx.lineWidth = Math.max(1.2, 2 * viewScale);
      drawRoundTri(
        ctx,
        point.x,
        point.y,
        layer.size * viewScale,
        time * layer.speed,
        0.24,
      );
      ctx.stroke();
    }
  }
  ctx.restore();
}

function drawRoundedRect(x, y, width, height, radius) {
  const right = x + width;
  const bottom = y + height;

  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(right - radius, y);
  ctx.quadraticCurveTo(right, y, right, y + radius);
  ctx.lineTo(right, bottom - radius);
  ctx.quadraticCurveTo(right, bottom, right - radius, bottom);
  ctx.lineTo(x + radius, bottom);
  ctx.quadraticCurveTo(x, bottom, x, bottom - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawDropQuantityLabel(quantity, x, y, size) {
  if (quantity <= 1) return;

  ctx.save();
  ctx.font = `900 ${size}px "Trebuchet MS", "Avenir Next", sans-serif`;
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  ctx.lineJoin = "round";
  ctx.lineWidth = Math.max(3, size * 0.24);
  ctx.strokeStyle = "#111217";
  ctx.fillStyle = "#fffdf1";
  ctx.strokeText(`${quantity}`, x, y);
  ctx.fillText(`${quantity}`, x, y);
  ctx.restore();
}

function drawRockMonsterShape(targetCtx, width, height, seed, redAlpha = 0) {
  const radius = Math.min(width, height) * 0.42;
  const sides = 5 + Math.floor(gardenHash(seed, 2.4, 18.6) * 8);
  const points = [];

  for (let index = 0; index < sides; index++) {
    const angle = (Math.PI * 2 * index) / sides - Math.PI / 2;
    const wobble = (gardenHash(seed, index * 3.1, 24.7) - 0.5) * radius * 0.32;
    const pointRadius = radius + wobble;
    points.push({
      x: Math.cos(angle) * pointRadius,
      y: Math.sin(angle) * pointRadius,
    });
  }

  targetCtx.beginPath();
  targetCtx.moveTo(points[0].x, points[0].y);
  for (let index = 1; index < points.length; index++) {
    targetCtx.lineTo(points[index].x, points[index].y);
  }
  targetCtx.closePath();
  targetCtx.lineJoin = "round";
  targetCtx.fillStyle = redAlpha > 0 ? "#ff2f2f" : "#787878";
  targetCtx.strokeStyle = redAlpha > 0 ? "rgba(255, 47, 47, 0.78)" : "#545454";
  targetCtx.lineWidth = Math.max(2, Math.min(width, height) * 0.16);
  targetCtx.fill();
  targetCtx.stroke();
}

function drawDrops() {
  const bounds = getWorldViewportBounds(DRAW_CULL_MARGIN);
  const viewScale = getViewScale();

  for (const drop of state.drops) {
    if (!circleIntersectsBounds(drop.x, drop.y, drop.size, bounds)) continue;

    const point = worldToScreen(drop.x, drop.y);
    const drawSize = drop.size * viewScale;
    const half = drawSize / 2;
    const imageSize = 40 * viewScale;

    ctx.save();
    drawRoundedRect(point.x - half, point.y - half, drawSize, drawSize, 7 * viewScale);
    ctx.fillStyle = "#64a8dc";
    ctx.fill();
    ctx.lineWidth = Math.max(1.5, 4 * viewScale);
    ctx.strokeStyle = drop.item.tierColor;
    ctx.stroke();
    const image = state.assets[drop.item.asset] || state.assets.basic;
    ctx.drawImage(image, point.x - imageSize / 2, point.y - imageSize / 2, imageSize, imageSize);
    drawDropQuantityLabel(
      drop.quantity,
      point.x + half - 6 * viewScale,
      point.y - half + 5 * viewScale,
      Math.max(11, 15 * viewScale),
    );
    ctx.restore();
  }
}

function drawMonsters() {
  const bounds = getWorldViewportBounds(DRAW_CULL_MARGIN);
  const viewScale = getViewScale();

  for (const monster of state.monsters) {
    if (monster.hidden) continue;
    if (!circleIntersectsBounds(monster.x, monster.y, Math.max(monster.width, monster.height), bounds)) continue;

    const point = worldToScreen(monster.x, monster.y);
    const drawWidth = monster.width * viewScale;
    const drawHeight = monster.height * viewScale;
    const scale = getCreatureScale(monster, state.lastTime);
    const redAlpha = getCreatureRedAlpha(monster, state.lastTime);
    const idleTime = state.lastTime * 0.001 * monster.wobbleSpeed + monster.wobbleSeed;
    const bob = monster.stationary ? 0 : Math.sin(idleTime) * monster.bobAmount * viewScale;
    const sway = monster.stationary ? 0 : Math.sin(idleTime * 1.45) * monster.wobbleAmount;
    const image = state.assets[monster.asset] || state.assets.bee;

    ctx.save();
    ctx.translate(point.x, point.y + bob);
    ctx.scale(scale, scale);
    const drawAngle = monster.stationary
      ? 0
      : monster.name === "Ladybug"
        ? monster.faceAngle + LADYBUG_HEAD_FORWARD_OFFSET + sway
        : monster.faceAngle + sway;
    ctx.rotate(drawAngle);
    if (monster.name === "Rock") {
      drawRockMonsterShape(ctx, drawWidth, drawHeight, monster.wobbleSeed);
    } else {
      ctx.drawImage(
        image,
        -drawWidth / 2,
        -drawHeight / 2,
        drawWidth,
        drawHeight,
      );
    }
    if (redAlpha > 0) {
      ctx.save();
      ctx.globalAlpha = redAlpha;
      if (monster.name === "Rock") {
        drawRockMonsterShape(ctx, drawWidth, drawHeight, monster.wobbleSeed, redAlpha);
      } else if (monster.hitShape === "circle") {
        ctx.fillStyle = "#ff2f2f";
        ctx.beginPath();
        ctx.arc(0, 0, (monster.hitRadius || Math.min(monster.width, monster.height) * 0.44) * viewScale, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = "#ff2f2f";
        ctx.beginPath();
        ctx.ellipse(0, 0, drawWidth * 0.48, drawHeight * 0.34, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
    ctx.restore();

    if (monster.dying) continue;

    const tierLabel = monster.tier || TIERS[monster.tierIndex]?.name || `Lv.${monster.tierIndex + 1}`;
    drawOutlinedText(
      tierLabel,
      point.x,
      point.y + bob + (drawHeight * scale) / 2 + 15 * viewScale,
      Math.max(11, 13 * viewScale),
      monster.tierColor,
    );

    if (monster.health >= monster.maxHealth) continue;

    const barWidth = 58 * viewScale;
    const barHeight = 8 * viewScale;
    const barX = point.x - barWidth / 2;
    const barY = point.y - drawHeight / 2 - 18 * viewScale;
    ctx.fillStyle = "rgba(17, 18, 23, 0.42)";
    ctx.fillRect(barX, barY, barWidth, barHeight);
    ctx.fillStyle = "#e84d4d";
    ctx.fillRect(barX, barY, barWidth * (monster.health / monster.maxHealth), barHeight);
    ctx.strokeStyle = monster.tierColor;
    ctx.lineWidth = Math.max(1.5, 3 * viewScale);
    ctx.strokeRect(barX, barY, barWidth, barHeight);
  }
}

function drawDamageNumbers() {
  if (!state.settings.showDamageNumbers) return;

  const bounds = getWorldViewportBounds(DRAW_CULL_MARGIN);

  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = '900 24px/1 "Trebuchet MS", "Avenir Next", sans-serif';
  ctx.lineJoin = "round";

  for (const number of state.damageNumbers) {
    if (!circleIntersectsBounds(number.x, number.y, 80, bounds)) continue;

    const progress = clamp(
      (state.lastTime - number.startedAt) / DAMAGE_NUMBER_DURATION_MS,
      0,
      1,
    );
    const point = worldToScreen(number.x, number.y);

    ctx.globalAlpha = 1 - progress;
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#111217";
    ctx.fillStyle = "#ff3f3f";
    ctx.strokeText(`${number.value}`, point.x, point.y - progress * 46);
    ctx.fillText(`${number.value}`, point.x, point.y - progress * 46);
  }

  ctx.restore();
}

function drawPlayerFace(targetCtx, radius, eyeLook, redAlpha = 0) {
  const size = radius * 2;
  const image = state.assets.player;
  const scale = radius / 50;

  targetCtx.drawImage(image, -radius, -radius, size, size);

  const eyes = [
    { x: -12.8 * scale, y: -15.2 * scale, rotation: 0.08 },
    { x: 11.6 * scale, y: -15.3 * scale, rotation: -0.04 },
  ];

  for (const eye of eyes) {
    targetCtx.save();
    targetCtx.translate(eye.x, eye.y);
    targetCtx.rotate(eye.rotation);
    targetCtx.fillStyle = "#121316";
    targetCtx.beginPath();
    targetCtx.ellipse(0, 0, 4.9 * scale, 9.2 * scale, 0, 0, Math.PI * 2);
    targetCtx.fill();
    targetCtx.restore();
  }

  for (const eye of eyes) {
    targetCtx.save();
    targetCtx.translate(eye.x + eyeLook.x * 2.7 * scale, eye.y + eyeLook.y * 5.0 * scale);
    targetCtx.rotate(eye.rotation);
    targetCtx.fillStyle = "#fffdf6";
    targetCtx.beginPath();
    targetCtx.ellipse(0, 0, 2.4 * scale, 5.6 * scale, 0, 0, Math.PI * 2);
    targetCtx.fill();
    targetCtx.restore();
  }

  if (redAlpha > 0) {
    targetCtx.save();
    targetCtx.globalAlpha = redAlpha;
    targetCtx.fillStyle = "#ff2f2f";
    targetCtx.beginPath();
    targetCtx.arc(0, 0, radius, 0, Math.PI * 2);
    targetCtx.fill();
    targetCtx.restore();
  }
}

function drawPlayer() {
  if (!state.spawned) return;
  if (state.player.hidden) return;

  const point = worldToScreen(state.player.x, state.player.y);
  const x = point.x;
  const y = point.y;
  const viewScale = getViewScale();
  const radius = state.player.radius * viewScale;
  const deathScale = getCreatureScale(state.player, state.lastTime);
  const redAlpha = getCreatureRedAlpha(state.player, state.lastTime);
  const portalProgress = state.portalTransition.active
    ? clamp(
        (state.lastTime - state.portalTransition.startedAt) / state.portalTransition.duration,
        0,
        1,
      )
    : 0;
  const portalEase = 1 - (1 - portalProgress) ** 3;
  let drawX = x;
  let drawY = y;
  if (state.portalTransition.active) {
    const portalPoint = worldToScreen(state.portalTransition.x, state.portalTransition.y);
    drawX += (portalPoint.x - x) * portalEase;
    drawY += (portalPoint.y - y) * portalEase;
  }

  ctx.save();
  ctx.translate(drawX, drawY);
  ctx.rotate(portalProgress * Math.PI * 6);
  ctx.globalAlpha = 1 - portalProgress * 0.92;
  ctx.scale(deathScale * (1 - portalEase * 0.86), deathScale * (1 - portalEase * 0.86));
  drawPlayerFace(ctx, radius, state.eyeLook, redAlpha);
  ctx.restore();

  if (!state.player.dying && state.settings.showPlayerHealthBar) {
    if (state.player.health < state.player.maxHealth) {
      drawHealthBar(
        x,
        y + radius + 16,
        66 * viewScale,
        8 * viewScale,
        state.player.health,
        state.player.maxHealth,
        "#63e06e",
      );
    }
    drawOutlinedText(`Lv.${state.player.level}`, x, y + radius + 36 * viewScale, Math.max(11, 15 * viewScale));
  }
}

function drawHighTierPetalTrail(weapon, center, viewScale, petalSize, screenX, screenY) {
  if (
    !weapon.petal ||
    !isPetalUnitActive(weapon.petal, weapon.unitIndex) ||
    weapon.petal.tierIndex < HIGH_TIER_TRAIL_START_INDEX
  ) {
    return;
  }

  const orbitRadius = state.weapon.orbitRadius * viewScale;
  const color = weapon.petal.tierColor || "#ffffff";
  const speed = Math.max(0.08, getPetalSpinSpeed());
  const unitSeed = (weapon.petal.id || 1) * 13.7 + (weapon.unitIndex || 0) * 31.3;

  ctx.save();
  ctx.fillStyle = color;
  if (weapon.placed) {
    for (let mote = 0; mote < 28; mote++) {
      const seedA = gardenHash(mote, unitSeed, 111);
      const seedB = gardenHash(mote, unitSeed, 112);
      const seedC = gardenHash(mote, unitSeed, 113);
      const pulse = (state.lastTime * 0.0026 + seedA) % 1;
      const angle = seedB * Math.PI * 2 + pulse * 0.65;
      const distance = (8 + pulse * 38 + seedC * 10) * viewScale;
      const radius = petalSize * (0.08 - pulse * 0.04) * (0.65 + seedA * 0.6);

      ctx.globalAlpha = Math.max(0, 0.44 - pulse * 0.36);
      ctx.beginPath();
      ctx.arc(
        screenX + Math.cos(angle) * distance,
        screenY + Math.sin(angle) * distance,
        Math.max(1.05, radius),
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }
    ctx.restore();
    return;
  }

  for (let cluster = 1; cluster <= 13; cluster++) {
    const progress = cluster / 13;
    const delayAngle = progress * 0.86 * speed;
    const baseAngle = weapon.angle - delayAngle;
    const originX = center.x + Math.cos(baseAngle) * (orbitRadius - progress * 6 * viewScale);
    const originY = center.y + Math.sin(baseAngle) * (orbitRadius - progress * 6 * viewScale);

    for (let mote = 0; mote < 4; mote++) {
      const seedA = gardenHash(cluster, unitSeed, 91 + mote * 3);
      const seedB = gardenHash(cluster, unitSeed, 92 + mote * 3);
      const seedC = gardenHash(cluster, unitSeed, 93 + mote * 3);
      const scatterAngle =
        baseAngle +
        (seedA - 0.5) * Math.PI * 1.25 +
        Math.sin(state.lastTime * 0.006 + unitSeed + cluster + mote) * 0.18;
      const outwardDistance = (5 + progress * 46) * viewScale * (0.35 + seedB * 0.85);
      const tangentAngle = baseAngle + Math.PI / 2;
      const tangentDistance = (seedC - 0.5) * (8 + progress * 30) * viewScale;
      const x =
        originX +
        Math.cos(scatterAngle) * outwardDistance +
        Math.cos(tangentAngle) * tangentDistance;
      const y =
        originY +
        Math.sin(scatterAngle) * outwardDistance +
        Math.sin(tangentAngle) * tangentDistance;
      const radius = petalSize * (0.088 - progress * 0.048) * (0.72 + seedC * 0.72);

      ctx.globalAlpha = Math.max(0, 0.5 - progress * 0.42) * (0.55 + seedA * 0.45);
      ctx.beginPath();
      ctx.arc(x, y, Math.max(1.05, radius), 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawWeapons() {
  if (!state.spawned) return;
  if (!state.player.alive || state.player.dying || state.player.hidden) return;

  const center = worldToScreen(state.player.x, state.player.y);
  const viewScale = getViewScale();

  for (const weapon of getWeaponPositions()) {
    if (!weapon.petal) continue;

    let weaponX = weapon.x;
    let weaponY = weapon.y;
    if (weapon.petal.healEffectEndsAt && state.lastTime < weapon.petal.healEffectEndsAt) {
      const progress = clamp(
        (state.lastTime - weapon.petal.healEffectStartedAt) /
          (weapon.petal.healEffectEndsAt - weapon.petal.healEffectStartedAt),
        0,
        1,
      );
      const easedProgress = 1 - (1 - progress) ** 2;
      const radius = state.weapon.orbitRadius * (1 - easedProgress);
      const angle = weapon.petal.healEffectAngle ?? weapon.angle;
      weaponX = state.player.x + Math.cos(angle) * radius;
      weaponY = state.player.y + Math.sin(angle) * radius;
    }

    const x = center.x + (weaponX - state.player.x) * viewScale;
    const y = center.y + (weaponY - state.player.y) * viewScale;
    const petalSize = state.weapon.size * (weapon.sizeScale || 1) * viewScale;

    drawHighTierPetalTrail(weapon, center, viewScale, petalSize, x, y);

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(weapon.angle + Math.PI / 2);
    const image = state.assets[weapon.petal.asset] || state.assets.basic;
    const unitActive = isPetalUnitActive(weapon.petal, weapon.unitIndex);
    if (!unitActive) ctx.globalAlpha = 0.35;
    ctx.drawImage(image, -petalSize / 2, -petalSize / 2, petalSize, petalSize);
    if (!unitActive) {
      const rechargeProgress = getPetalUnitRechargeProgress(weapon.petal, weapon.unitIndex);
      ctx.globalAlpha = 0.62;
      ctx.rotate(rechargeProgress * Math.PI * 2);
      ctx.fillStyle = "rgba(60, 62, 66, 0.48)";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, petalSize * 0.62, -Math.PI / 2, Math.PI * 0.9);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }
}

function drawHealthBar(x, y, width, height, health, maxHealth, fillStyle) {
  const ratio = Math.max(0, Math.min(1, health / maxHealth));
  const barX = x - width / 2;
  const barY = y - height / 2;

  ctx.fillStyle = "rgba(17, 18, 23, 0.42)";
  ctx.fillRect(barX, barY, width, height);
  ctx.fillStyle = fillStyle;
  ctx.fillRect(barX, barY, width * ratio, height);
  ctx.strokeStyle = "#111217";
  ctx.lineWidth = 2;
  ctx.strokeRect(barX, barY, width, height);
}

function getVisibleBossBarMonsters() {
  if (!state.spawned) return [];

  const bounds = getWorldViewportBounds(0);
  return state.monsters
    .filter((monster) => {
      if (monster.hidden || monster.dying || !monster.alive) return false;
      if (monster.tierIndex < MONSTER_BOSS_BAR_MIN_TIER_NUMBER - 1) return false;
      return circleIntersectsBounds(monster.x, monster.y, Math.max(monster.width, monster.height), bounds);
    })
    .sort((a, b) => {
      const tierDelta = b.tierIndex - a.tierIndex;
      if (tierDelta) return tierDelta;
      const healthRatioDelta = a.health / a.maxHealth - b.health / b.maxHealth;
      if (Math.abs(healthRatioDelta) > 0.001) return healthRatioDelta;
      const distanceA = Math.hypot(a.x - state.player.x, a.y - state.player.y);
      const distanceB = Math.hypot(b.x - state.player.x, b.y - state.player.y);
      return distanceA - distanceB;
    })
    .slice(0, MAX_MONSTER_BOSS_BARS);
}

function drawBossMonsterBars() {
  const monsters = getVisibleBossBarMonsters();
  if (!monsters.length) return;

  const panelWidth = Math.min(state.width - 32, state.width < 760 ? 340 : 470);
  const barHeight = 18;
  const rowHeight = 56;
  const startX = state.width / 2 - panelWidth / 2;
  const startY = state.width < 760 ? 88 : 18;

  ctx.save();
  monsters.forEach((monster, index) => {
    const y = startY + index * rowHeight;
    const ratio = Math.max(0, Math.min(1, monster.health / monster.maxHealth));

    drawOutlinedText(getMonsterDisplayName(monster.name), state.width / 2, y, 18, "#fffdf1");

    drawRoundedRect(startX, y + 14, panelWidth, barHeight, 6);
    ctx.fillStyle = "rgba(17, 18, 23, 0.62)";
    ctx.fill();
    const fillWidth = panelWidth * ratio;
    if (fillWidth > 0.5) {
      drawRoundedRect(startX, y + 14, fillWidth, barHeight, Math.min(6, fillWidth / 2));
      ctx.fillStyle = "#d84444";
      ctx.fill();
    }
    ctx.lineWidth = 4;
    ctx.strokeStyle = monster.tierColor || "#fffdf1";
    drawRoundedRect(startX, y + 14, panelWidth, barHeight, 6);
    ctx.stroke();

    drawOutlinedText(
      `${formatPetalStat(Math.ceil(monster.health))} / ${formatPetalStat(monster.maxHealth)}`,
      state.width / 2,
      y + 23,
      12,
      "#fffdf1",
    );
    drawOutlinedText(monster.tier || TIERS[monster.tierIndex]?.name || "", state.width / 2, y + 45, 15, monster.tierColor);
  });
  ctx.restore();
}

function drawOutlinedText(text, x, y, size, fillStyle = "#fffdf1") {
  ctx.save();
  ctx.font = `900 ${size}px "Trebuchet MS", "Avenir Next", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineJoin = "round";
  ctx.lineWidth = Math.max(3, size * 0.22);
  ctx.strokeStyle = "#111217";
  ctx.fillStyle = fillStyle;
  ctx.strokeText(text, x, y);
  ctx.fillText(text, x, y);
  ctx.restore();
}

function draw() {
  drawBackground();
  if (state.spawned) {
    drawMapPortals();
    drawDrops();
    drawMonsters();
    drawDamageNumbers();
  }
  drawWeapons();
  drawPlayer();
  drawHitboxes();
  drawMinimap();
  drawPlayerHud();
  drawBossMonsterBars();
}

function drawHitboxes() {
  if (!state.settings.showHitboxes) return;

  const bounds = getWorldViewportBounds(DRAW_CULL_MARGIN);
  const viewScale = getViewScale();

  ctx.save();
  ctx.lineWidth = Math.max(1, 2 * viewScale);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.92)";

  if (state.spawned && !state.player.hidden) {
    const playerPoint = worldToScreen(state.player.x, state.player.y);
    ctx.beginPath();
    ctx.arc(playerPoint.x, playerPoint.y, state.player.hitRadius * viewScale, 0, Math.PI * 2);
    ctx.stroke();
  }

  for (const monster of state.monsters) {
    if (monster.hidden) continue;
    if (!circleIntersectsBounds(monster.x, monster.y, Math.max(monster.width, monster.height), bounds)) continue;
    const monsterPoint = worldToScreen(monster.x, monster.y);
    const monsterShape = getMonsterHitbox(monster);
    ctx.save();
    ctx.translate(monsterPoint.x, monsterPoint.y);
    ctx.beginPath();
    if (monsterShape.type === "circle") {
      ctx.arc(0, 0, monsterShape.radius * viewScale, 0, Math.PI * 2);
    } else {
      ctx.rotate(monsterShape.angle);
      ctx.ellipse(0, 0, monsterShape.radiusX * viewScale, monsterShape.radiusY * viewScale, 0, 0, Math.PI * 2);
    }
    ctx.stroke();
    ctx.restore();
  }

  ctx.strokeStyle = "rgba(255, 214, 41, 0.92)";
  for (const weapon of getWeaponPositions()) {
    if (!weapon.petal || !weapon.petal.active) continue;
    const weaponPoint = worldToScreen(weapon.x, weapon.y);
    ctx.beginPath();
    ctx.arc(weaponPoint.x, weaponPoint.y, (weapon.hitRadius || state.weapon.hitRadius) * viewScale, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.restore();
}

function drawMinimap() {
  const playerX = ((state.player.x + MAP_HALF_WIDTH) / MAP_WIDTH) * MINIMAP_WIDTH;
  const playerY = ((state.player.y + MAP_HALF_HEIGHT) / MAP_HEIGHT) * MINIMAP_HEIGHT;

  minimapCtx.clearRect(0, 0, MINIMAP_WIDTH, MINIMAP_HEIGHT);
  minimapCtx.fillStyle = "#22a969";
  minimapCtx.fillRect(0, 0, MINIMAP_WIDTH, MINIMAP_HEIGHT);
  if (state.mapArtCanvas) {
    minimapCtx.save();
    minimapCtx.imageSmoothingEnabled = false;
    minimapCtx.drawImage(state.mapArtCanvas, 0, 0, MINIMAP_WIDTH, MINIMAP_HEIGHT);
    minimapCtx.restore();
  }

  minimapCtx.strokeStyle = "#24743f";
  minimapCtx.lineWidth = 5;
  minimapCtx.strokeRect(2.5, 2.5, MINIMAP_WIDTH - 5, MINIMAP_HEIGHT - 5);
  drawGarden2PortalMapMarker(minimapCtx, MINIMAP_WIDTH, MINIMAP_HEIGHT, 5);

  minimapCtx.fillStyle = "#fffdf1";
  minimapCtx.strokeStyle = "#111217";
  minimapCtx.lineWidth = 3;
  minimapCtx.beginPath();
  minimapCtx.arc(playerX, playerY, 6, 0, Math.PI * 2);
  minimapCtx.fill();
  minimapCtx.stroke();
}

function drawPlayerHud() {
  const healthRatio = Math.max(0, Math.min(1, state.player.health / state.player.maxHealth));
  const levelExperienceRequired = Math.max(1, state.player.nextExperience);
  const experienceRatio = Math.max(
    0,
    Math.min(1, state.player.experience / levelExperienceRequired),
  );

  playerName.textContent = state.player.name;
  playerHealthFill.style.width = `${healthRatio * 100}%`;
  playerExperienceFill.style.width = `${experienceRatio * 100}%`;
  playerExperienceCurrent.textContent = `${Math.floor(state.player.experience)}`;
  playerExperienceNeeded.textContent = `${levelExperienceRequired} / ${Math.max(
    0,
    Math.ceil(levelExperienceRequired - state.player.experience),
  )}`;
  playerLevel.textContent = `Lv.${state.player.level}`;

  portraitCtx.clearRect(0, 0, PORTRAIT_SIZE, PORTRAIT_SIZE);
  portraitCtx.save();
  portraitCtx.beginPath();
  portraitCtx.arc(PORTRAIT_SIZE / 2, PORTRAIT_SIZE / 2, PORTRAIT_SIZE / 2 - 2, 0, Math.PI * 2);
  portraitCtx.clip();
  portraitCtx.fillStyle = "#94df72";
  portraitCtx.fillRect(0, 0, PORTRAIT_SIZE, PORTRAIT_SIZE);
  portraitCtx.translate(PORTRAIT_SIZE / 2, PORTRAIT_SIZE / 2);
  drawPlayerFace(portraitCtx, 34, state.eyeLook);
  portraitCtx.restore();

}

function advanceGame(time, shouldDraw = true) {
  const elapsed = Math.min(MAX_CATCH_UP_SECONDS, Math.max(0, (time - state.lastTime) / 1000 || 0));
  const steps = Math.max(1, Math.ceil(elapsed / 0.033));
  const stepDt = elapsed / steps;
  const startTime = state.lastTime;

  for (let step = 1; step <= steps; step++) {
    update(stepDt, startTime + stepDt * step * 1000);
  }

  state.lastTime = time;
  if (shouldDraw) draw();
}

function frame(time) {
  if (!document.hidden) {
    advanceGame(time, true);
  }
  requestAnimationFrame(frame);
}

function syncBackgroundSimulation() {
  if (document.hidden) {
    if (!backgroundTickTimer) {
      backgroundTickTimer = window.setInterval(() => {
        advanceGame(performance.now(), false);
      }, BACKGROUND_TICK_MS);
    }
    return;
  }

  if (backgroundTickTimer) {
    window.clearInterval(backgroundTickTimer);
    backgroundTickTimer = 0;
  }
  state.lastTime = performance.now();
}

async function boot() {
  resize();
  await loadAssets();
  syncAccountBackups();
  seedMonsterPopulation();
  renderItemUi();
  renderMonsterDexUi();
  renderPetalDexUi();
  renderForgingUi();
  updateLeaderboard(performance.now(), true);
  syncSettingsUi();
  loadingScreen.classList.add("is-hidden");
  state.lastTime = performance.now();
  requestAnimationFrame(frame);
}

window.addEventListener("resize", resize);
document.addEventListener("visibilitychange", () => {
  syncBackgroundSimulation();
  ensureMusicPlaying();
});
window.addEventListener("focus", ensureMusicPlaying);
window.addEventListener("keydown", ensureMusicPlaying);
window.addEventListener("pointerdown", ensureMusicPlaying);
window.addEventListener("pointermove", (event) => {
  if (state.input.joystickPointerId === event.pointerId) {
    event.preventDefault();
    setJoystickPosition(event.clientX, event.clientY);
    return;
  }
  if (
    inventoryPanel.contains(event.target) ||
    settingsPanel.contains(event.target) ||
    settingsButton.contains(event.target) ||
    talentPanel.contains(event.target) ||
    talentButton.contains(event.target) ||
    craftPanel.contains(event.target) ||
    craftButton.contains(event.target) ||
    forgePanel.contains(event.target) ||
    forgeButton.contains(event.target) ||
    accountPanel.contains(event.target) ||
    accountButton.contains(event.target) ||
    monsterDexPanel.contains(event.target) ||
    monsterDexButton.contains(event.target) ||
    authorPanel.contains(event.target) ||
    dragData
  ) {
    state.uiLockMovement = true;
    return;
  }
  if (tabletControls.contains(event.target)) return;
  setPointer(event.clientX, event.clientY);
});
window.addEventListener("pointerdown", (event) => {
  if (!state.spawned || isDeathScreenOpen() || event.target !== canvas) return;
  canvas.setPointerCapture?.(event.pointerId);
  if (usesTouchControls()) {
    event.preventDefault();
    startJoystick(event.pointerId, event.clientX, event.clientY);
    return;
  }

  setPointer(event.clientX, event.clientY);
  if (event.button === 0) {
    const wasAttacking = state.input.attack;
    state.input.attack = true;
    if (!wasAttacking) placePollenPetalsFromAttack();
  }
  if (event.button === 2) {
    const wasDefending = state.input.defend;
    state.input.defend = true;
    if (!wasDefending) placePollenPetals();
  }
  syncCombatControls();
});
window.addEventListener("pointerup", (event) => {
  if (state.input.joystickPointerId === event.pointerId) {
    resetJoystick();
  }
  if (event.button === 0) state.input.attack = false;
  if (event.button === 2) state.input.defend = false;
  syncCombatControls();
});
window.addEventListener("pointercancel", () => {
  resetJoystick();
  state.input.attack = false;
  state.input.defend = false;
  syncCombatControls();
});
window.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  event.stopPropagation();
}, { capture: true });
window.addEventListener("auxclick", (event) => {
  if (event.button !== 2) return;
  event.preventDefault();
  event.stopPropagation();
}, { capture: true });
window.addEventListener("keydown", (event) => {
  if (isBlockedBrowserShortcut(event)) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (!state.spawned && event.code === "Enter") {
    event.preventDefault();
    startGame();
    return;
  }
  if (!state.spawned) return;

  handleAuthorCodeKey(event);

  if (!isTextEntryTarget(event.target)) {
    const digitMatch = event.code.match(/^(?:Digit|Numpad)([1-9])$/);
    if (digitMatch) {
      const slotIndex = Number(digitMatch[1]) - 1;
      if (slotIndex < getEffectiveEquipmentSlots()) {
        event.preventDefault();
        swapEquipmentSlot(slotIndex);
        return;
      }
    }
    if ((event.code === "Digit0" || event.code === "Numpad0") && getEffectiveEquipmentSlots() >= 10) {
      event.preventDefault();
      swapEquipmentSlot(9);
      return;
    }
    if (event.code === "KeyR") {
      event.preventDefault();
      swapAllEquipmentSlots();
      return;
    }
  }

  if (event.code === "ArrowUp") state.input.cameraUp = true;
  if (event.code === "ArrowLeft") state.input.cameraLeft = true;
  if (event.code === "ArrowDown") state.input.cameraDown = true;
  if (event.code === "ArrowRight") state.input.cameraRight = true;
  if (event.code === "KeyW") state.input.up = true;
  if (event.code === "KeyA") state.input.left = true;
  if (event.code === "KeyS") state.input.down = true;
  if (event.code === "KeyD") state.input.right = true;
  if (event.code === "Space") {
    event.preventDefault();
    const wasAttacking = state.input.attack;
    state.input.attack = true;
    if (!wasAttacking) placePollenPetalsFromAttack();
  }
  if (event.key === "Shift") {
    event.preventDefault();
    const wasDefending = state.input.defend;
    state.input.defend = true;
    if (!wasDefending) placePollenPetals();
  }
  syncCombatControls();
});
window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp") state.input.cameraUp = false;
  if (event.code === "ArrowLeft") state.input.cameraLeft = false;
  if (event.code === "ArrowDown") state.input.cameraDown = false;
  if (event.code === "ArrowRight") state.input.cameraRight = false;
  if (event.code === "KeyW") state.input.up = false;
  if (event.code === "KeyA") state.input.left = false;
  if (event.code === "KeyS") state.input.down = false;
  if (event.code === "KeyD") state.input.right = false;
  if (event.code === "Space") state.input.attack = false;
  if (event.key === "Shift") state.input.defend = false;
  syncCombatControls();
});
window.addEventListener("blur", () => {
  state.input.up = false;
  state.input.down = false;
  state.input.left = false;
  state.input.right = false;
  state.input.cameraUp = false;
  state.input.cameraDown = false;
  state.input.cameraLeft = false;
  state.input.cameraRight = false;
  state.input.attack = false;
  state.input.defend = false;
  resetJoystick();
  syncCombatControls();
  state.uiLockMovement = false;
});
settingsButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpening = settingsPanel.classList.contains("is-hidden");
  closeFloatingPanels();
  settingsPanel.classList.toggle("is-hidden", !isOpening);
  settingsButton.classList.toggle("is-active", isOpening);
});
accountButton.addEventListener("click", () => {
  if (accountPanel.classList.contains("is-hidden")) {
    openAccountPanel();
  } else {
    closeFloatingPanels();
  }
});
monsterDexButton.addEventListener("click", () => {
  if (monsterDexPanel.classList.contains("is-hidden")) {
    openMonsterDexPanel();
  } else {
    closeFloatingPanels();
  }
});
petalDexButton.addEventListener("click", () => {
  if (petalDexPanel.classList.contains("is-hidden")) {
    openPetalDexPanel();
  } else {
    closeFloatingPanels();
  }
});
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loginAccount();
});
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  registerAccount();
});
wechatRegisterButton.addEventListener("click", registerAccount);
appleRegisterButton.addEventListener("click", registerAccount);
settingsPanel.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
settingsPanel.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
settingsOptions.forEach((button) => {
  button.addEventListener("click", () => {
    const setting = button.dataset.setting;
    const value = button.dataset.value;

    state.settings[setting] = value;
    if (setting === "movement" && value !== "joystick") resetJoystick();
    syncSettingsUi();
  });
});
musicToggle.addEventListener("click", () => {
  setMusicEnabled(!state.settings.music);
});
qualitySelect.addEventListener("change", () => {
  state.settings.quality = qualitySelect.value;
  syncSettingsUi();
  resize();
});
hitboxToggle.addEventListener("click", () => {
  state.settings.showHitboxes = !state.settings.showHitboxes;
  syncSettingsUi();
});
reverseAttackToggle.addEventListener("click", () => {
  state.settings.reverseAttack = !state.settings.reverseAttack;
  syncCombatControls();
  syncSettingsUi();
});
playerHealthToggle.addEventListener("click", () => {
  state.settings.showPlayerHealthBar = !state.settings.showPlayerHealthBar;
  syncSettingsUi();
});
otherPetalsToggle.addEventListener("click", () => {
  state.settings.showOtherPetals = !state.settings.showOtherPetals;
  syncSettingsUi();
});
damageNumbersToggle.addEventListener("click", () => {
  state.settings.showDamageNumbers = !state.settings.showDamageNumbers;
  if (!state.settings.showDamageNumbers) state.damageNumbers = [];
  syncSettingsUi();
});
talentButton.addEventListener("click", () => {
  const isOpening = talentPanel.classList.contains("is-hidden");
  closeFloatingPanels();
  talentPanel.classList.toggle("is-hidden", !isOpening);
  talentButton.classList.toggle("is-active", isOpening);
  renderTalentUi();
});
craftButton.addEventListener("click", () => {
  const isOpening = craftPanel.classList.contains("is-hidden");
  closeFloatingPanels();
  craftPanel.classList.toggle("is-hidden", !isOpening);
  craftButton.classList.toggle("is-active", isOpening);
  renderCraftingUi();
});
craftSubmitButton.addEventListener("click", craftLoadedPetals);
craftCloseButton.addEventListener("click", closeFloatingPanels);
forgeButton.addEventListener("click", () => {
  const isOpening = forgePanel.classList.contains("is-hidden");
  closeFloatingPanels();
  forgePanel.classList.toggle("is-hidden", !isOpening);
  forgeButton.classList.toggle("is-active", isOpening);
  renderForgingUi();
});
forgeSubmitButton.addEventListener("click", forgeLoadedStingers);
forgeCloseButton.addEventListener("click", closeFloatingPanels);
inventoryToggleButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const isCollapsed = !inventoryPanel.classList.contains("is-collapsed");
  inventoryPanel.classList.toggle("is-collapsed", isCollapsed);
  inventoryToggleButton.textContent = isCollapsed ? "+" : "×";
});
inventoryPanel.addEventListener("click", (event) => {
  if (!inventoryPanel.classList.contains("is-collapsed")) return;
  if (event.target !== inventoryPanel && !event.target.closest(".inventory-head")) return;

  inventoryPanel.classList.remove("is-collapsed");
  inventoryToggleButton.textContent = "×";
});
window.addEventListener("pointerdown", (event) => {
  if (isFloatingPanelTarget(event.target)) return;
  closeFloatingPanels();
});
spawnButton.addEventListener("click", startGame);
modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectMode(button.dataset.mode);
  });
});
inventoryPanel.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
inventoryPanel.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
talentPanel.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
talentPanel.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
talentButton.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
talentButton.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
craftPanel.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
craftPanel.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
craftButton.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
craftButton.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
forgePanel.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
forgePanel.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
forgeButton.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
forgeButton.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
accountPanel.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
accountPanel.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
petalDexPanel.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
petalDexPanel.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
authorPanel.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
authorPanel.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
accountButton.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
accountButton.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
monsterDexPanel.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
monsterDexPanel.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
monsterDexButton.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
monsterDexButton.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
petalDexButton.addEventListener("pointerenter", () => {
  state.uiLockMovement = true;
});
petalDexButton.addEventListener("pointerleave", () => {
  if (!dragData) state.uiLockMovement = false;
});
inventoryPanel.addEventListener("pointerdown", () => {
  state.uiLockMovement = true;
});
craftPanel.addEventListener("pointerdown", () => {
  state.uiLockMovement = true;
});
forgePanel.addEventListener("pointerdown", () => {
  state.uiLockMovement = true;
});
accountPanel.addEventListener("pointerdown", () => {
  state.uiLockMovement = true;
});
monsterDexPanel.addEventListener("pointerdown", () => {
  state.uiLockMovement = true;
});
petalDexPanel.addEventListener("pointerdown", () => {
  state.uiLockMovement = true;
});
authorCard.addEventListener("pointerdown", () => {
  state.uiLockMovement = true;
});
window.addEventListener("pointerup", (event) => {
  if (
    !inventoryPanel.contains(event.target) &&
    !talentPanel.contains(event.target) &&
    !craftPanel.contains(event.target) &&
    !forgePanel.contains(event.target) &&
    !accountPanel.contains(event.target) &&
    !petalDexPanel.contains(event.target) &&
    !monsterDexPanel.contains(event.target) &&
    !authorPanel.contains(event.target) &&
    !dragData
  ) {
    state.uiLockMovement = false;
  }
});
monsterDexCloseButton.addEventListener("click", closeFloatingPanels);
petalDexCloseButton.addEventListener("click", closeFloatingPanels);
authorCloseButton.addEventListener("click", closeFloatingPanels);
authorVerifyButton.addEventListener("click", verifyAuthorAccess);
authorMapPreview.addEventListener("click", selectAuthorTeleportPoint);
authorTeleportButton.addEventListener("click", teleportToAuthorPoint);
authorAddItemButton.addEventListener("click", addAuthorInventoryItems);
authorSetLevelButton.addEventListener("click", setAuthorPlayerLevel);
authorSpawnMonsterButton.addEventListener("click", spawnAuthorMonsters);
inventoryPanel.addEventListener("dragover", (event) => {
  event.preventDefault();
  state.uiLockMovement = true;
});
inventoryPanel.addEventListener("drop", (event) => {
  event.preventDefault();
  dropDraggedItemToInventory();
});
joystick.addEventListener("pointerdown", (event) => {
  event.stopPropagation();
});
touchAttackButton.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  setInputAction("attack", true);
});
touchAttackButton.addEventListener("pointerup", () => {
  setInputAction("attack", false);
});
touchAttackButton.addEventListener("pointerleave", () => {
  setInputAction("attack", false);
});
touchAttackButton.addEventListener("pointercancel", () => {
  setInputAction("attack", false);
});
touchDefendButton.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  setInputAction("defend", true);
});
touchDefendButton.addEventListener("pointerup", () => {
  setInputAction("defend", false);
});
touchDefendButton.addEventListener("pointerleave", () => {
  setInputAction("defend", false);
});
touchDefendButton.addEventListener("pointercancel", () => {
  setInputAction("defend", false);
});
respawnButton.addEventListener("pointerdown", (event) => {
  event.stopPropagation();
});
respawnButton.addEventListener("pointerup", (event) => {
  event.stopPropagation();
});
respawnButton.addEventListener("click", respawnPlayer);

boot().catch((error) => {
  loadingScreen.classList.remove("is-hidden");
  console.error(error);
});
